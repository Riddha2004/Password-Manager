'use client';
import Link from "next/link";
import Bars3 from "@/components/icons/Bars3";
import { useState } from "react";

export default function Header() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    return (
        <header>
            <div className="">
           <div className="flex items-center justify-between">
            <Link href={'/'} className="text-blue-400 text-2xl mt-2 px-4 md:hidden">PassMan</Link>
            <button 
             className="p-1 border border-green-300 m-2 md:hidden" 
             onClick={() => setMobileNavOpen(prev => !prev)}>
            <Bars3/>
            </button>
           </div>
          {mobileNavOpen && (
           <div 
              onClick={()=>setMobileNavOpen(false)}
              className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center">
           <Link href={'/'}>Home</Link>
           <Link href={'/#about'}>About</Link>
           <Link href={'/#contact'}>Contact</Link>
          </div>
          )}
            <nav className="hidden md:flex items-center gap-8 text-gray-500 font-semibold">
            <Link href={'/'} className="text-blue-400 text-2xl mt-2 px-4">PassMan</Link>
            <Link href={'/'} className="mt-2 px-4">Home</Link>
            <Link href={'/#about'} className="mt-2 px-4">About Us</Link>
            <Link href={'/#contact'} className="mt-2 px-4">Contact</Link>
           </nav>
          </div>
        </header>
    );
}