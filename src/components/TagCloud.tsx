export type PokemonType =
  | "fire"
  | "water"
  | "electric"
  | "poison"
  | "grass"
  | "rock"
  | "fairy"
  | "flying"
  | "psychic"
  | "ice"
  | "dark"
  | "normal"
  | "bug"
  | "steel"
  | "ground"
  | "fighting"
  | "dragon"
  | "ghost";
export const TypeColor = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

interface TagCloudProps {
  type: PokemonType;
}
export default function TagCloud({ type }: TagCloudProps) {
  const typeColor = TypeColor[type];

  return (
    <span
      className="text-md text-center p-1 text-white rounded-lg"
      style={{ backgroundColor: typeColor }}
    >
      {type}
    </span>
  );
}
