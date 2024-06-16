'use client';

import { useState } from "react";
import InpCard from "../components/InpCard";
import Button from "../components/Button";

const WeatherParams = () => {

    const [tmpmx, setTmpMx ] = useState(0);
    const [tmpmn, setTmpMn ] = useState(0);
    const [precp, setPrecp ] = useState(0);
    const [wind, setWind ] = useState(0);

    return ( 
        <div className="flex flex-wrap gap-y-12 py-12">
            <InpCard className="basis-6/12" img={"tmpmx.png"} val={tmpmx} change={setTmpMx} wid={"w-2/12"}>Temp Max</InpCard>
            <InpCard className="basis-6/12" img={"tmpmn.png"} val={tmpmn} change={setTmpMn} wid={"w-4/12"}>Temp Min</InpCard>
            <InpCard className="basis-6/12" img={"precip.png"} val={precp} change={setPrecp} wid={"w-4/12"}>Precipitation</InpCard>
            <InpCard className="basis-6/12" img={"wind.png"} val={wind} change={setWind} wid={"w-5/12"}>Wind Speed </InpCard>
        </div>
     );
}
 
export default WeatherParams;