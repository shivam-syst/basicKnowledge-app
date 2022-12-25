type Props = {
  text: string;
};

const Intro = ({ text }: Props) => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-6 md:mb-8">
      <h1 className="text-3xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 cc__textColor">
        {text}
      </h1>
    </section>
  );
};

export default Intro;
