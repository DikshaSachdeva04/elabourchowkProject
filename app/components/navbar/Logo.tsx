'use client';
import Image from "next/image";
import { useRouter} from 'next/navigation';

const Logo=()=>{
    const router= useRouter();
    return(
       <> <Image 
       onClick={()=>router.push('/')}
        alt="logo"
        className="hidden md:block cursor-pointer
        "
        height="100"
        width="100"
        src="/images/logo.png"
        
        />
        <h2 className="font-extrabold text-lg bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">e-Labour-Chowk</h2>
        </>
    )

}
export default Logo;