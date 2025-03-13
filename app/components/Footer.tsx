export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center bg-black text-white p-10">
      <img
        src="/logotype_light.svg"
        alt="Kasa"
        className="logotype mb-5"
        width={120}
      />
      <p className="text-sm md:text-base">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
