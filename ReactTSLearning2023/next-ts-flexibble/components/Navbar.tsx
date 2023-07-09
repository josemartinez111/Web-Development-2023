"use client";
// FILE: components/Navbar.tsx
// _______________________________________________

import AuthProviders from "@/components/providers/AuthProviders";
import { NavLinks } from "@/constants";
import { NavLinkType } from "@/types/link.types";
import Link from "next/link";
import Image from "next/image";
// _______________________________________________

// type NavbarProps = {
// 	mockProp?: string;
// };
// _______________________________________________

const Navbar = () => {
  const session = {};
  
  // _________________ [functions] ___________________
  
  // _________________________________________________
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        {/*|====== Image-link ======|*/ }
        <Link href="/">
          <Image src="/logo.svg" width={ 115 } height={ 43 } alt="Flexible" />
        </Link>
        
        {/*|====== list-of-links ======|*/ }
        <ul className="xl:flex hidden text-small gap-7">
          { NavLinks.map((link: NavLinkType) => (
            <Link href={ link.href } key={ link.key }>
              { link.text }
            </Link>
          )) }
        </ul>
      </div>
      
      <div className="flexCenter gap-4">
        {
          session ?
            (
              <>
            UserPhoto
            <Link href="/create-project">
              Share your work
            </Link>
          </>
            ) :
            (<AuthProviders />)
        }
      </div>
    </nav>
  );
};
// _______________________________________________

export default Navbar;
// _______________________________________________
