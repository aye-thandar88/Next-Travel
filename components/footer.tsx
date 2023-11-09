import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";

type Props = {};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
  key: string;
};

const FooterColumn = ({ title, children, key }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5" key={key}>
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

const Footer = (props: Props) => {
  return (
    <footer className="mt-10">
      <div className="max-container padding-container w-full flex flex-col gap-14 py-10">
        <div className="flex flex-col items-start justify-center md:flex-row gap-[10%]">
          <Link href="/">
            <Image
              src="/camp2.jpg"
              alt="logo"
              width={144}
              height={29}
              className="rounded-full"
            />
          </Link>
          <div className="flex flex-wrap gap-10 md:flex-1 sm:justify-between">
            {FOOTER_LINKS.map((column) => (
              <FooterColumn title={column.title} key={column.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {column.links.map((link, index) => (
                    <Link href="/" key={link + index}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <FooterColumn
              title={FOOTER_CONTACT_INFO.title}
              key={FOOTER_CONTACT_INFO.title}
            >
              {FOOTER_CONTACT_INFO.links.map((link, index) => (
                <Link
                  href="/"
                  key={link.label}
                  className="flex gap-4 md:flex-col lg:flex-row"
                >
                  <p className="whitespace-nowrap">{link.label}:</p>
                  <p className="medium-14 whitespace-nowrap text-blue-70">
                    {link.value}
                  </p>
                </Link>
              ))}
            </FooterColumn>
          </div>
          <div className="flex flex-col gap-5">
            <FooterColumn title={SOCIALS.title} key={SOCIALS.title}>
              <ul className="regular-14 flex gap-4 text-gray-30">
                {SOCIALS.links.map((link, index) => (
                  <Link href="/" key={link + index}>
                    <Image src={link} alt="logo" width={24} height={24} />
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
        <div className="border-t-2 border-gray-30 py-10">
          <p className="regular-14 w-full text-center text-gray-30">
            2023 Hilink | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
