"use client";
// FILE: components/Footer.tsx
// _______________________________________________

import FooterColumn from "@/components/shared/FooterColumn";
import { footerLinks } from "@/constants";
import Image from "next/image";
// _______________________________________________

// type FooterProps = {
// 	mockProp?: string;
// };
// _______________________________________________

const Footer = () => {
  
  // _________________ [functions] ___________________
  
  
  // _________________________________________________
  return (
    <footer className="flexStart footer">
			<div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image
            className="h-auto"
            src="/logo-purple.svg"
            width={ 115 }
            height={ 38 }
            alt="flexibble"
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Flexibble is the world's leading community for
            creatives to share, grow, and get hired.
          </p>
        </div>
        { /*|====== footer-columns component ======|*/ }
        <div className="flex flex-wrap gap-12">
          { footerLinks.map((linkGroup, index) => (
            <div className="flex-1 flex flex-col gap-4" key={ index }>
              <FooterColumn
                title={ linkGroup.title }
                links={ linkGroup.links }
              />
            </div>
          )) }
        </div>
      </div>
      
      <div className="flexBetween footer_copyright">
        <p>
          <strong>@</strong> 2023 Flexibble. All rights reserved <strong>©</strong>
        </p>
        <p className="text-gray">
          <span className="text-black font-semibold">
            10,214</span> projects submitted
        </p>
      </div>
		</footer>
  );
};
// _______________________________________________

export default Footer;
// _______________________________________________