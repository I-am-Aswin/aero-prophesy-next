'use client'
import Image from 'next/image';

const Result = ( { pred } ) => {;

    return (
        <div className="flex flex-col justify-center items-center -translate-y-36 fade transition-all duration-300">

            <div className="w-4/6">
                <Image src={`/assets/res/${pred}.png`} alt='Resultant Weather' height={500} width={500} layout='responsive'></Image>
            </div>
            <p className="text-2xl mt-2">Weather : {pred}</p>
        </div>

    );
}
 
export default Result;