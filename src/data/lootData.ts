import { LootItem } from '@/types/loot';

export const lootData: LootItem[] = [
  {
    item: "Flame Tongue Longsword",
    description: "A magical longsword that can burst into flames on command, dealing additional fire damage.",
    estValue: "5,000 gp",
    rarity: "rare",
    weight: "3 lbs",
    category: "Weapon",
    properties: "Versatile (1d10), requires attunement, flame blade activation",
    requirements: "Proficiency with longswords",
    author: "Core Rulebook",
    rarityNumber: 3
  },
  {
    item: "Cloak of Elvenkind",
    description: "A cloak that grants advantage on stealth checks and makes the wearer harder to detect.",
    estValue: "5,000 gp",
    rarity: "uncommon",
    weight: "1 lb",
    category: "Wondrous Item",
    properties: "Advantage on Stealth checks, disadvantage on Perception checks to see you",
    requirements: "Requires attunement",
    author: "Core Rulebook",
    rarityNumber: 2
  },
  {
    item: "Potion of Greater Healing",
    description: "A crimson liquid that glows when shaken, restoring significant health when consumed.",
    estValue: "150 gp",
    rarity: "uncommon",
    weight: "0.5 lbs",
    category: "Potion",
    properties: "Heals 4d4+4 hit points when consumed",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 2
  },
  {
    item: "Bag of Holding",
    description: "A magical bag that can hold much more than its size would suggest.",
    estValue: "4,000 gp",
    rarity: "uncommon",
    weight: "15 lbs",
    category: "Wondrous Item",
    properties: "Holds up to 500 lbs, 64 cubic feet of space",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 2
  },
  {
    item: "Boots of Speed",
    description: "Magical boots that allow the wearer to move with incredible swiftness.",
    estValue: "8,000 gp",
    rarity: "rare",
    weight: "2 lbs",
    category: "Wondrous Item",
    properties: "Double speed for 10 minutes once per day, requires attunement",
    requirements: "Requires attunement",
    author: "Core Rulebook",
    rarityNumber: 3
  },
  {
    item: "Ring of Protection",
    description: "A simple band that provides magical protection to its wearer.",
    estValue: "3,500 gp",
    rarity: "rare",
    weight: "0 lbs",
    category: "Ring",
    properties: "+1 to AC and saving throws, requires attunement",
    requirements: "Requires attunement",
    author: "Core Rulebook",
    rarityNumber: 3
  },
  {
    item: "Wand of Magic Missiles",
    description: "A slender wand topped with a glowing crystal that fires magical darts.",
    estValue: "8,000 gp",
    rarity: "uncommon",
    weight: "1 lb",
    category: "Wand",
    properties: "7 charges, regains 1d6+1 charges daily, requires attunement by spellcaster",
    requirements: "Requires attunement by spellcaster",
    author: "Core Rulebook",
    rarityNumber: 2
  },
  {
    item: "Adamantine Armor",
    description: "Armor forged from adamantine, making it incredibly durable and protective.",
    estValue: "5,000 gp",
    rarity: "uncommon",
    weight: "65 lbs",
    category: "Armor",
    properties: "Critical hits become normal hits, extremely durable",
    requirements: "Proficiency with heavy armor",
    author: "Core Rulebook",
    rarityNumber: 2
  },
  {
    item: "Immovable Rod",
    description: "A flat iron rod with a button that, when pressed, fixes the rod in place.",
    estValue: "5,000 gp",
    rarity: "uncommon",
    weight: "2 lbs",
    category: "Rod",
    properties: "Becomes fixed in space when activated, holds up to 8,000 pounds",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 2
  },
  {
    item: "Decanter of Endless Water",
    description: "A magical flask that produces an endless supply of fresh water.",
    estValue: "2,000 gp",
    rarity: "uncommon",
    weight: "2 lbs",
    category: "Wondrous Item",
    properties: "Produces fresh water in various amounts and pressures",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 2
  },
  {
    item: "Leather Armor",
    description: "Basic protective gear made from thick, treated leather.",
    estValue: "10 gp",
    rarity: "common",
    weight: "10 lbs",
    category: "Armor",
    properties: "11 + Dex modifier AC, light armor",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 1
  },
  {
    item: "Healing Potion",
    description: "A simple red liquid that restores minor wounds when consumed.",
    estValue: "50 gp",
    rarity: "common",
    weight: "0.5 lbs",
    category: "Potion",
    properties: "Heals 2d4+2 hit points when consumed",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 1
  },
  {
    item: "Silvered Weapon",
    description: "A weapon coated with silver, effective against certain creatures.",
    estValue: "100 gp",
    rarity: "common",
    weight: "varies",
    category: "Weapon",
    properties: "Overcomes resistance of some creatures to nonmagical attacks",
    requirements: "Proficiency with base weapon",
    author: "Core Rulebook",
    rarityNumber: 1
  },
  {
    item: "Vorpal Sword",
    description: "A legendary blade that can decapitate foes with a perfect strike.",
    estValue: "50,000 gp",
    rarity: "legendary",
    weight: "3 lbs",
    category: "Weapon",
    properties: "Decapitates on critical hit (natural 20), +3 enhancement, requires attunement",
    requirements: "Requires attunement, proficiency with swords",
    author: "Core Rulebook",
    rarityNumber: 5
  },
  {
    item: "Sphere of Annihilation",
    description: "A 2-foot-diameter black sphere that destroys all matter it touches.",
    estValue: "Priceless",
    rarity: "legendary",
    weight: "0 lbs",
    category: "Wondrous Item",
    properties: "Destroys all matter, extremely dangerous to control",
    requirements: "Extreme caution advised",
    author: "Core Rulebook",
    rarityNumber: 5
  },
  
  // New Treasure category items
  {
    item: "Ancient Gold Coins",
    description: "A collection of ancient gold coins from a long-lost civilization.",
    estValue: "500 gp",
    rarity: "common",
    weight: "1 lb",
    category: "Treasure",
    properties: "Pure gold, collector's value",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 1
  },
  {
    item: "Jeweled Goblet",
    description: "An ornate goblet encrusted with precious gems.",
    estValue: "2,500 gp",
    rarity: "uncommon",
    weight: "2 lbs",
    category: "Treasure",
    properties: "Decorated with rubies and emeralds",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 2
  },
  
  // New Adventuring Gear category items
  {
    item: "Rope of Climbing",
    description: "A magical rope that moves and knots itself on command.",
    estValue: "2,000 gp",
    rarity: "uncommon",
    weight: "3 lbs",
    category: "Adventuring Gear",
    properties: "60 feet of rope, moves on command",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 2
  },
  {
    item: "Lantern of Revealing",
    description: "A lantern that reveals invisible creatures and objects.",
    estValue: "5,000 gp",
    rarity: "uncommon",
    weight: "2 lbs",
    category: "Adventuring Gear",
    properties: "Reveals invisible creatures in 30-foot radius",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 2
  },
  
  // New Book category items
  {
    item: "Tome of Clear Thought",
    description: "A magical book that permanently increases the reader's intelligence.",
    estValue: "27,500 gp",
    rarity: "very rare",
    weight: "5 lbs",
    category: "Book",
    properties: "Increases Intelligence by 2, once per century",
    requirements: "Requires attunement",
    author: "Core Rulebook",
    rarityNumber: 4
  },
  {
    item: "Spell Scroll",
    description: "A scroll containing a magical spell that can be cast once.",
    estValue: "100 gp",
    rarity: "common",
    weight: "0 lbs",
    category: "Book",
    properties: "Contains one spell, consumed on use",
    requirements: "Ability to cast spells",
    author: "Core Rulebook",
    rarityNumber: 1
  },
  
  // New Food category items
  {
    item: "Elven Bread",
    description: "A single bite of this nutritious bread sustains a person for a full day.",
    estValue: "50 gp",
    rarity: "common",
    weight: "0.1 lbs",
    category: "Food",
    properties: "Provides full day's nutrition in one bite",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 1
  },
  {
    item: "Honey of Restoration",
    description: "Golden honey that removes poison and disease when consumed.",
    estValue: "300 gp",
    rarity: "uncommon",
    weight: "0.5 lbs",
    category: "Food",
    properties: "Removes one poison or disease",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 2
  },
  
  // New Mundane category items
  {
    item: "Iron Spikes",
    description: "Simple iron spikes used for securing ropes and climbing.",
    estValue: "1 gp",
    rarity: "common",
    weight: "5 lbs",
    category: "Mundane",
    properties: "Set of 10 iron spikes",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 1
  },
  {
    item: "Merchant's Scale",
    description: "A precise balance scale for weighing goods and coins.",
    estValue: "5 gp",
    rarity: "common",
    weight: "3 lbs",
    category: "Mundane",
    properties: "Accurate to 1/10th of a pound",
    requirements: "None",
    author: "Core Rulebook",
    rarityNumber: 1
  }
];
