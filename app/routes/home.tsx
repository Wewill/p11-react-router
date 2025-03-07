import type { Route } from "./+types/home";
import Hero from "../components/banner/Hero";
import Card from "../components/card/Card";
import { getLogements } from "../data";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Accueil" },
    { name: "description", content: "Welcome to ... " },
  ];
}

// Loader is run on the server and the client
// export async function loader({ params }: Route.LoaderArgs) {
//   const cards = await getLogements();
//   return cards;
// }
export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const cards = await getLogements();
  return cards;
}

// HydrateFallback is rendered while the client loader is running
export function HydrateFallback() {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const cards = loaderData;

  return (
    <>
      <Hero />
      <section
        id="cards"
        className="grid gap-6 grid-cols-3 p-10 bg-stone-100 rounded-xl"
      >
        {cards.map((card) => (
          <Card
            key={card.id}
            imageSrc={card.cover}
            altText={card.description}
            linkId={card.id}
            cardTitle={card.title}
          />
        ))}
      </section>
    </>
  );
}
