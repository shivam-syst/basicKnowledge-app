import Button from "./button";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 cc__textColor">
            Share and Subscribe
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="/"
              className="mx-3 bg-black hover:bg-white hover:text-black border-2 cc__borderColor text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 cc__bgColor"
            >
              Contact Us
            </a>
            <a href={` `} className="mx-3 font-bold hover:underline">
              Send us a email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
