const typeColors = {
  fire: "#f2cba0",
  grass: "#91caa7",
  poison: "#632765",
  bug: "#597956",
  water: "#1E7EDD",
  flying: "#5E73D6",
  electric: "#F3BA28",
  ground: "#CBAF5A",
  dark: "#3D2D22",
  dragon: "#745EDF",
  fighting: "#82331C",
  ice: "#6FD3F5",
  ghost: "#484797",
  psychic: "#ED4882",
  rock: "#9D853B",
  steel: "#AFAFBF",
  fairy: "#F3AEF4",
  normal: "#c3BFB4",
};

export const getTypeColor = (color: string): string => {
  // type that dont exists, return by default the grass color
  if (!typeColors[color]) return typeColors.grass;
  return typeColors[color];
};
