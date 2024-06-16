'use client';

import Image from "next/image"

const ValGroup = ( {val, change, className, disabled} ) => {

    let handleChange = (e) => {
        try {
            let value = e.target.value;

            if( value == '' ) {
                change('');
                return;
            }

            if( value.match(/^-?\d*\.?\d*$/)){
                change( value );
            }
        } catch ( err ) {
            console.log( err );
        }
    }

    let handleClick = ( i ) => {
        change( x => (parseFloat(x)*10 + i) / 10 )
    }

    let handleBlur = ( ) => {
        if( val == '' || val == '-')
            change( 0 );
        else 
        change( x => parseFloat(x));
    }

    return (
        <div className={`${className ? className : ''} flex w-4/6 rounded-full bg-white border-black items-center justify-center`}>
            <button onClick={ () => handleClick(-1)} className="w-1/4 py-1 text-gray-700 text-xl hover:bg-sky-500 hover:bg-opacity-30 hover:text-black transition-all duration-150 rounded-l-full disabled:bg-gray-300" disabled={disabled}>-</button>
            <input onChange={handleChange} onBlur={handleBlur} type="text" className="w-2/4 text-black text-xl text-center outline-none" value={val} disabled={disabled}/>
            <button onClick={ () => handleClick(1)} className="w-1/4 py-1 text-gray-700 text-xl hover:bg-sky-500 hover:bg-opacity-30 hover:text-black transition-all duration-150 rounded-r-full disabled:bg-gray-300" disabled={disabled}>+</button>
        </div>
    )
}

const InpCard = ( {children, img, val, change, className, wid, disabled}) => {
    return ( 
        <div className={`${className ? className : ''} flex flex-col justify-center items-center`}>
            <div className={`${wid}`}>
                <Image src={`/assets/icons/${img}`} width={500} height={500} alt={`${img}`} layout="responsive" className="object-contain"></Image>
            </div>
            <p className="text-xl mt-2">{children}</p>
            <ValGroup className="mt-4" val={val} change={change} disabled={disabled}></ValGroup>
        </div>
     );
}
 
export default InpCard;