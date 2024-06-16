'use client';

import Link from 'next/link'
import { useRouter } from 'next/navigation';

const Button = ({ className, children, route='#', ...props}) => {

    const router = useRouter();
    let routing;
    if( route === 'back' ) {

        routing = {
            href: "",
            onClick : () => router.back()
        };
    } else {
        routing = {
            href: route
        }
    }

    console.log(routing)

    return ( 
        <Link {...routing} className={ `${ className ? className : ''} bg-[#093160] px-5 py-3 text-lg rounded-2xl border border-gray-400 shadown-lg transition-all duration-150 hover:bg-[#0E4383] hover:scale-105` } {...props}>{children}</Link>
     );
}
 
export default Button;