import Link from "next/link";
type Props = {
  text: string;
  link: string;
};

const Button = ({ text, link }: Props) => {
  return (
    <Link
      href={link}
      style={{ maxWidth: "200px" }}
      className={`cc__bgColor cc__borderColor border-2 hover:bg-white hover:text-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6`}
    >
      {text}
    </Link>
  );
};

export default Button;
