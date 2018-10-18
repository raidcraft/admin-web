export enum ItemType {
  WEAPON = 'Waffe',
  ARMOR = 'Rüstung',
  USEABLE = 'Benutzbar',
  EQUIPMENT = 'Ausrüstung',
  QUEST = 'Quest Item',
  ENCHANTMENT = 'Verzauberung',
  GEM = 'Edelstein',
  ENHANCEMENT = 'Verbesserung',
  CRAFTING = 'Handwerkswaren',
  CONSUMEABLE = 'Verbrauchbar',
  TRASH = 'Müll',
  SPECIAL = 'Spezial',
  PROFESSION = 'Beruf',
  CLASS = 'Klasse',
  UNDEFINED = 'Undefiniert'
}

export enum ItemBindType {
  SOULBOUND = 'Seelengebunden',
  BOE = 'Bind on Equip',
  BOP = 'Bind on Pickup',
  QUEST = 'Quest Item',
  NONE = 'Nichts'
}

export enum ItemQuality {
  POOR = 'Schlecht',
  COMMON = 'Verbreitet',
  UNCOMMON = 'Selten',
  RARE = 'Rar',
  EPIC = 'Episch',
  LEGENDARY = 'Legendär'
}

export enum EquipmentSlot {
  ONE_HANDED = 'Einhändig',
  SHIELD_HAND = 'Schildhand',
  TWO_HANDED = 'Zweihändig',
  HEAD = 'Kopf',
  CHEST = 'Brust',
  LEGS = 'Beine',
  FEET = 'Füße',
  HANDS = 'Hände',
  INVENTORY = 'Inventar',
  UNDEFINED = 'Undefiniert'
}


export enum WeaponType {
  SWORD = 'Schwert',
  TWO_HAND_SWORD = 'Zweihand Schwert',
  DAGGER = 'Dolch',
  AXE = 'Axt',
  TWO_HAND_AXE = 'Zweihand Axt',
  POLEARM = 'Stangenwaffe',
  MACE = 'Streitkolben',
  TWO_HAND_MACE = 'Zweihand Streitkolben',
  STAFF = 'Stab',
  BOW = 'Bogen',
  MAGIC_WAND = 'Zauberstab'
}


export enum ArmorType {
  CLOTH = 'Stoff',
  LEATHER = 'Leder',
  MAIL = 'Kette',
  PLATE = 'Platte',
  SHIELD = 'Schild'
}


export enum AttributeType {
  STRENGTH = 'Stärke',
  AGILITY = 'Beweglichkeit',
  STAMINA = 'Ausdauer',
  INTELLECT = 'Intelligenz',
  SPIRIT = 'Willenskraft'
}

export enum ConsumeableType {
  HEALTH = 'Leben',
  RESOURCE = 'Ressource',
  ATTRIBUTE = 'Attribut'
}

export function keyFromValue(stringEnum: { [key: string]: string }, value: string): string | undefined {
  for (const k of Object.keys(stringEnum)) {
    if (stringEnum[k] === value) return k;
  }
  return undefined;
}
