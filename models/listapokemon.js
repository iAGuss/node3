const pokemons = [
  {
    name: "Bulbasaur",
    height: "0,7m",
    weight: "6,9kg",
    stats: {
      hp: 45,
      atk: 49,
      def: 49,
      spd: 65,
      satk: 65,
      sdef: 45,
    },
    moves: ["Overgrow", "Chlorophyll"],
    types: ["Grass", "Poison"],
    type1color: "#74CB48",
    type2color: "#A43E9E",
    number: "001",
    color: "#74CB48",

    description:
      "There is a plant seed on it's back right from the day this Pokémon is born. The seed slowly grows larger",
  },

  {
    name: "Charmander",
    height: "0,6m",
    weight: "8,5kg",
    stats: {
      hp: 39,
      atk: 52,
      def: 43,
      spd: 65,
      satk: 60,
      sdef: 50,
    },
    moves: ["Blaze", "Power"],

    types: ["Fire"],
    number: "004",
    color: "#F57D31",
    type1color: "#F57D31",
    type2color: "",

    description:
      "The flame on it's tail shows the strength of it's life force. If it is weak, the flame also burns weakly",
  },

  {
    name: "Squirtle",
    height: "0,5m",
    weight: "9,0kg",
    stats: {
      hp: 44,
      atk: 48,
      def: 65,
      spd: 43,
      satk: 50,
      sdef: 64,
    },
    moves: ["Torrent", "Rain-dish"],
    types: ["Water"],
    number: "007",
    color: "#6493EB",
    type1color: "#6493EB",
    type2color: "",

    description:
      "Shoots water at prey while in the water. Withdraws into it's shell when in danger",
  },
  {
    name: "ButterFree",
    height: "11m",
    weight: "3,20kg",
    stats: {
      hp: 60,
      atk: 45,
      def: 50,
      spd: 70,
      satk: 90,
      sdef: 80,
    },
    moves: ["Compound-eyes", "Tinted-lens"],
    types: ["Bug", "Flying"],
    number: "012",
    color: "#A7B723",
    type1color: "#A7B723",
    type2color: "#A891EC",

    description:
      "In battle, it flaps it's wings at high speed to release highly toxic dust into the air",
  },
  {
    name: "Pikachu",
    height: "0.4m",
    weight: "6,0kg",
    stats: {
      hp: 35,
      atk: 55,
      def: 40,
      spd: 90,
      satk: 50,
      sdef: 50,
    },
    moves: ["Static", "Lightning-rod"],
    types: ["Electric"],
    number: "025",
    color: "#F9CF30",
    type1color: "#F9CF30",
    type2color: "",

    description:
      "It keeps it's tail raised to monitor its surroundings. If you yank it's tail, it will try to bite you",
  },
  {
    name: "Gastly",
    height: "1.3m",
    weight: "1kg",
    stats: {
      hp: 30,
      atk: 35,
      def: 30,
      spd: 80,
      satk: 100,
      sdef: 35,
    },
    moves: ["Static"],
    types: ["Ghost", "Poison"],
    color: "#70559B",
    type1color: "#70559B",
    type2color: "#A43E9E",

    description:
      "Almost invisible, this gaseous POKéMON cloaks the target and puts it to sleep without notice.",
    number: "082",
  },
  {
    name: "Ditto",
    height: "0.3m",
    weight: "40kg",
    stats: {
      hp: 48,
      atk: 48,
      def: 48,
      spd: 48,
      satk: 48,
      sdef: 48,
    },
    moves: ["Limber", "Imposter"],
    types: ["Normal"],
    color: "#AAA67F",
    type1color: "#AAA67F",
    type2color: "",

    description:
      "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.",
    number: "132",
  },
  {
    name: "Mew",
    height: "0.4m",
    weight: "40kg",
    stats: {
      hp: 100,
      atk: 100,
      def: 100,
      spd: 100,
      satk: 100,
      sdef: 100,
    },
    moves: ["Synchronize"],
    types: ["Psychic"],
    color: "#FB5584",
    type1color: "#FB5584",
    type2color: "",

    description:
      "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
    number: "182",
  },
  {
    name: "Aron",
    height: "0.4m",
    weight: "600kg",
    stats: {
      hp: 50,
      atk: 70,
      def: 100,
      spd: 30,
      satk: 40,
      sdef: 40,
    },
    moves: ["Synchronize"],
    types: ["Steel", "Rock"],
    color: "#B789D0",
    type1color: "#B789D0",
    type2color: "#B69E31",

    description:
      "This POKéMON has a body of steel. To make its body, ARON feeds on iron ore that it digs from mountains. Occasionally, it causes major trouble by eating bridges and rails.",
    number: "304",
  },
];

module.exports = pokemons;
