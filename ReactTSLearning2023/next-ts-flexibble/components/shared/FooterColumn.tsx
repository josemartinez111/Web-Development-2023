"use client";
// FILE: components/shared/FooterColumn.tsx
// _______________________________________________
// _______________________________________________

import Link from "next/link";

type FooterColumnProps = {
  title: string
  links: Array<string>
}
// _______________________________________________

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="footer-column">
		<h4 className="font-semibold">
			{ title }
		</h4>
		
		<ul className="flex flex-col gap-2 font-normal">
			{ links.map((link) => (
        <Link href="/" key={ link }>
	        { link }
				</Link>
      )) }
		</ul>
	</div>
);
// _______________________________________________

export default FooterColumn;
// _______________________________________________