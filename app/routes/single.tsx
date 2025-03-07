import type { Route } from "./+types/single";
import { getLogement } from "../data";

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
    <div>
      Single :<h1>{single.title}</h1>
      <p>{single.description}</p>
    </div>
  );
}
