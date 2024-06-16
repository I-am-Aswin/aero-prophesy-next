import { NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

export async function POST(request) {
  try {
    let data = await request.json();

    const CONDA_ENV_PATH = "/home/aswin/anaconda3/envs/test_env";
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const R_SCRIPT_PATH = path.join(__dirname, "predict.R");
    const classes = ["drizzle", "fog", "rain", "snow", "sun"];

    const command = `${CONDA_ENV_PATH}/bin/Rscript ${R_SCRIPT_PATH} ${Number(
      data.pre
    )} ${Number(data.tmx)} ${Number(data.tmn)} ${Number(data.wind)}`;

    return new Promise((resolve) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          resolve(
            NextResponse.json(
              { ok: false, error: "Error in R script execution" },
              { status: 500 }
            )
          );
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
        }
        console.log({ ok: true, prediction: classes[stdout.trim() - 1] });
        resolve(
          NextResponse.json({
            ok: true,
            prediction: classes[stdout.trim() - 1],
          })
        );
      });
    });
  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json(
      { ok: false, message: "Unable to process the request" },
      { status: 500 }
    );
  }
}
