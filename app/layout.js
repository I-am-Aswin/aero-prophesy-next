import { Happy_Monkey } from "next/font/google";
import "./globals.css";

const font = Happy_Monkey({ subsets: ["latin"], weight: '400' });

export const metadata = {
  title: "Aero-Prophesy",
  description: "An Ultimate Weather Companion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
