interface HeroProps {
  backgroundImage: string;
  title: string;
}

export default function Hero({ backgroundImage, title }: HeroProps) {
  return (
    <section id="hero" className="mb-10">
      <div
        className="hero-wrap bg-cover bg-center rounded-lg w-full relative h-[111px] md:h-[225px] flex items-center justify-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <h1 className="text-white text-xl sm:text-3xl md:text-[48px] font-bold p-10 text-left md:text-center relative">
          {title}
        </h1>
      </div>
    </section>
  );
}
