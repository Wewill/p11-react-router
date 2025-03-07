import type { Route } from "./+types/single";
import { getLogement } from "../data";
import Accordion from "../components/accordion/accordion";
import Slideshow from "../components/slideshow/slideshow"; // Import the new Slideshow component

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Logement : " },
    { name: "description", content: "Welcome to ... " },
  ];
}

// https://reactrouter.com/tutorials/address-book#url-params-in-loaders
// Loader
// export async function loader({ params }: Route.LoaderArgs) {
//   const single = await getLogement(params.singleId);
//   // https://reactrouter.com/tutorials/address-book#throwing-responses
//   if (!single) {
//     throw new Response("Not Found", { status: 404 });
//   }
//   return { single };
// }

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const single = await getLogement(params.singleId);
  // https://reactrouter.com/tutorials/address-book#throwing-responses
  if (!single) {
    throw new Response("Not Found", { status: 404 });
  }
  return { single };
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

export default function Single({ loaderData }: Route.ComponentProps) {
  const { single } = loaderData;

  return (
    <>
      <Slideshow pictures={single.pictures} />
      <div id="head" className="flex justify-between items-center">
        <div className="flex flex-col">
          <hgroup>
            <h2 className="text-kasa text-4xl">{single.title}</h2>
            <p>{single.location}</p>
          </hgroup>
        </div>

        <div className="flex flex-row items-center">
          <p className="text-kasa w-20">{single.host.name}</p>
          <img
            className="rounded-full h-[64px] w-[64px] object-cover"
            src={single.host.picture}
            alt={single.host.name}
          />
        </div>
      </div>
      <div id="tags" className="flex flex-row mt-4">
        {single.tags.map((tag, index) => (
          <div
            key={index}
            className={`bg-kasa text-white rounded-sm p-1 ${
              index < single.tags.length - 1 ? "me-2" : ""
            }`}
          >
            {tag}
          </div>
        ))}
      </div>
      <div id="accordions" className="mt-4 flex justify-between w-full gap-4">
        <Accordion
          elClass="flex-1/2"
          header="Description"
          content={<p>{single.description}</p>}
        />
        <Accordion
          elClass="flex-1/2"
          header="Equipments"
          content={
            <ul>
              {single.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </>
  );
}
