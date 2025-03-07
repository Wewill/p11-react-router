export default function Hero() {
  return (
    <section id="hero" className="flex items-center justify-between p-10">
      <div
        className="hero-wrap bg-cover bg-center rounded-lg w-full"
        style={{ backgroundImage: "url('https://placehold.co/1040x300')" }}
      >
        <h1 className="text-white text-4xl font-bold p-10">
          Chez vous, partout et ailleurs
        </h1>
      </div>
    </section>
  );
}
