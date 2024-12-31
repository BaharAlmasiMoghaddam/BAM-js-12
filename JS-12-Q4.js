//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring

const god = { name: "Zeus", domain: "Sky" };
let weapon = "Lightning";

const { name: godName, domain: godDomain } = god;

console.log(
  `${godName} rules over the ${godDomain} with his ${weapon} has a message for you!`
);

// =====================================

const heroes = [
  {
    name: "Achilles",
    quest: "Trojan War",
    weapon: "spear",
    story:
      "Welcome, mighty Achilles! Troy is in turmoil, and the Greeks are struggling to gain the upper hand. Your strength and prowess are desperately needed on the battlefield. Lead the charge and bring victory to your people! dadshet Zeus!",
  },

  {
    name: "Odysseus",
    quest: "Return to Ithaca",
    weapon: "bow",
    story:
      "What the hell are you doing dude?! Ithaca needs its king to restore order and peace! Move! before I lose my pationet...",
  },

  {
    name: "Theseus",
    quest: "Defeat the Minotaur",
    weapon: "sword",
    story: "Athens is desperate for an ancient maze runner to end this terror.",
  },

  {
    name: "Perseus",
    quest: "Defeat Medusa",
    weapon: "sword",
    weakness: "mortal limitations",
    story:
      "The land is plagued by the terror of Medusa, and countless lives are at risk. Your mission to vanquish her is critical. Spoiler alert: Ask the mirror the name of your savior!",
  },

  {
    name: "Jason",
    quest: "Find the Golden Fleece",
    weapon: "sword",
    story:
      "Welcome, father of the pashm! The kingdom is on the brink of ruin without the Golden Fleece. Your quest is vital to restore prosperity and hope.",
  },
];

const showHeroMission = (heroName) => {
  const hero = heroes.find(
    (h) => h.name.toLowerCase() === heroName.toLowerCase()
  );
  if (hero) {
    const { story, quest, weapon } = hero;

    console.log(story);
    console.log(`Mission: ${quest}`);
    console.log(`Weapon: ${weapon}`);
  } else {
    console.log("Hero not found. Please try again.");
  }
};

const heroName = prompt(
  "Enter the hero's name to view their mission:[Achilles, Odysseus, Theseus, Perseus, Jason]"
);
showHeroMission(heroName);
