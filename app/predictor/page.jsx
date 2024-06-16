'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import InpCard from "../components/InpCard";
import Button from "../components/Button";
import Result from "./result";


const WeatherParams = () => {

    const [tmpmx, setTmpMx ] = useState(0);
    const [tmpmn, setTmpMn ] = useState(0);
    const [precp, setPrecp ] = useState(0);
    const [wind, setWind ] = useState(0);
    const [weather, setWeather] = useState('');

    const router = useRouter();

    let handleClick = async () => {

        if( weather != '') {
            return;
        } 

        let body = {
            pre: precp,
            tmx: tmpmx,
            tmn: tmpmn,
            wind: wind
        }

        let resp = await fetch( '/api/predict', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        let data = await resp.json();

        if( data.ok ) {
            setWeather(data.prediction);
        }
    }

    let handleBack = (e) => {
        if( weather != '' ) {
            setWeather('');
        } else {
            router.back()
        }
    }

    return (
        <div>
            <Button onClick={handleBack} weat={weather} className="bg-transparent border-none px-0 text-gray-300 hover:bg-transparent hover:underline hover:underline-offset-3 hover:scale-100" route="back" >{"< Back"}</Button>
            <p className="text-2xl font-bold">Parameters : </p>
            <div className={`flex flex-col justify-center items-center transition-all duration-300 ${weather != '' ? "scale-75 -translate-y-20" : '' }`}> 
                <div className="flex flex-wrap gap-y-12 py-8">
                    <InpCard className="basis-6/12" img={"tmpmx.png"} val={tmpmx} change={setTmpMx} wid={"w-2/12"} disabled={weather != ''}>Temp Max</InpCard>
                    <InpCard className="basis-6/12" img={"tmpmn.png"} val={tmpmn} change={setTmpMn} wid={"w-4/12"} disabled={weather != ''}>Temp Min</InpCard>
                    <InpCard className="basis-6/12" img={"precip.png"} val={precp} change={setPrecp} wid={"w-4/12"} disabled={weather != ''}>Precipitation</InpCard>
                    <InpCard className="basis-6/12" img={"wind.png"} val={wind} change={setWind} wid={"w-5/12"} disabled={weather != ''}>Wind Speed </InpCard>
                </div>

                { weather == '' && <Button onClick={handleClick}>Predict</Button> }

            </div>

            { weather != '' && <Result pred={weather} />}
        </div>
     );
}
 
export default WeatherParams;