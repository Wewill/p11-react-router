import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "À propos" },
    { name: "description", content: "Welcome to ... " },
  ];
}

export default function About() {
  return "About content page";
}
