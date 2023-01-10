import Container from "./container";
import { CONTACT_EMAIL, MENUS } from "../lib/constants";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        {/* <div className="py-20 flex flex-col lg:flex-row items-center justify-around"> */}
        <div className="py-20 flex flex-col md:flex-row justify-around">
          <div className="flex flex-col font-bold tracking-tighter leading-tight mb-4 lg:mb-0">
            {/* <h3 className="text-xl text-center lg:text-left mb-4 lg:pr-4 cc__textColor"> */}
            <h3 className="text-xl mb-4 lg:pr-4 cc__textColor">Read More</h3>
            {MENUS.map((menu) => {
              return (
                <Link href={menu.path} key={menu.id}>
                  {menu.menuName}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col font-bold tracking-tighter leading-tight mb-4 lg:mb-0">
            {/* <h3 className="text-xl text-center lg:text-left mb-4 lg:pr-4 cc__textColor"> */}
            <h3 className="text-xl mb-4 lg:pr-4 cc__textColor">
              Important Links
            </h3>
            <Link href="/about">About Us</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </div>
          {/* <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2"> */}
          <div className="flex items-center lg:pl-4">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="lg:mx-3 bg-black hover:bg-white hover:text-black border-2 cc__borderColor text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors cc__bgColor"
            >
              Send us an email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
