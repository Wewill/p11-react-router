type Logement = {
  id: string;
  title: string;
  description: string;
  cover: string;
};

export async function getLogements() {
  const response = await fetch("/logements.json");
  const logements: Logement[] = await response.json();
  return logements;
}

export async function getLogement(id: string) {
  const logements = await getLogements();
  return logements.find((logement) => logement.id === id);
}
