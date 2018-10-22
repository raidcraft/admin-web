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

export function getItemQualityBudgetMultiplier(quality: ItemQuality) {
  quality = quality && ItemQuality[quality];
  switch (quality) {
    case ItemQuality.UNCOMMON:
      return 0.5;
    case ItemQuality.RARE:
      return 0.63;
    case ItemQuality.EPIC:
      return 0.77;
    default:
      return 0;
  }
}

export function getItemQualityBudgetModifier(quality: ItemQuality) {
  quality = quality && ItemQuality[quality];
  switch (quality) {
    case ItemQuality.UNCOMMON:
      return -2;
    case ItemQuality.RARE:
      return -1.15;
    case ItemQuality.EPIC:
      return -1;
    default:
      return 0;
  }
}

export function getItemQualityDurabilityModifier(quality: ItemQuality) {
  quality = quality && ItemQuality[quality];
  switch (quality) {
    case ItemQuality.POOR:
    case ItemQuality.COMMON:
    case ItemQuality.UNCOMMON:
      return 1;
    case ItemQuality.RARE:
      return 1.17;
    case ItemQuality.EPIC:
      return 1.37;
    default:
      return 1;
  }
}

export function getItemQualityDPSMultiplier(quality: ItemQuality) {
  quality = quality && ItemQuality[quality];
  switch (quality) {
    case ItemQuality.POOR:
      return 0.7;
    case ItemQuality.COMMON:
      return 0.85;
    case ItemQuality.UNCOMMON:
      return 1;
    case ItemQuality.RARE:
      return 1.105;
    case ItemQuality.EPIC:
      return 1.215;
    default:
      return 1;
  }
}

export function getItemQualityArmorModifier(quality: ItemQuality, armor: ArmorType) {
  quality = quality && ItemQuality[quality];
  armor = armor && ArmorType[armor];
  switch (quality) {
    case ItemQuality.POOR:
      return 0.65;
    case ItemQuality.COMMON:
      return 0.8;
    case ItemQuality.UNCOMMON:
      return 1;
    case ItemQuality.RARE:
      return armor === ArmorType.SHIELD ? 1.125 : 1.1;
    case ItemQuality.EPIC:
      return armor === ArmorType.SHIELD ? 1.25 : 1.2;
    default:
      return 1;
  }
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

export function getItemLevelSlotModifier(slot: EquipmentSlot) {
  slot = slot && EquipmentSlot[slot];
  switch (slot) {
    case EquipmentSlot.ONE_HANDED:
      return 0.42;
    case EquipmentSlot.SHIELD_HAND:
      return 0.55;
    case EquipmentSlot.HEAD:
    case EquipmentSlot.FEET:
    case EquipmentSlot.HANDS:
      return 0.77;
    case EquipmentSlot.TWO_HANDED:
    case EquipmentSlot.CHEST:
    case EquipmentSlot.LEGS:
      return 1.0;
  }
}

export function getArmorSlotModifier(slot: EquipmentSlot) {
  slot = slot && EquipmentSlot[slot];
  switch (slot) {
    case EquipmentSlot.HEAD:
      return 1.012;
    case EquipmentSlot.FEET:
      return 1.075;
    case EquipmentSlot.CHEST:
      return 2.0;
    case EquipmentSlot.LEGS:
      return 1.075;
  }
}

export function getDpsSlotModifier(slot: EquipmentSlot) {
  slot = slot && EquipmentSlot[slot];
  switch(slot) {
    case EquipmentSlot.TWO_HANDED:
      return 1.305;
    default:
      return 1.0;
  }
}

export function getDurabilitySlotModifier(slot: EquipmentSlot) {
  slot = slot && EquipmentSlot[slot];
  switch(slot) {
    case EquipmentSlot.HEAD:
      return 0.59;
    case EquipmentSlot.CHEST:
      return 1.0;
    case EquipmentSlot.LEGS:
      return 0.75;
    case EquipmentSlot.FEET:
      return 0.49;
    case EquipmentSlot.ONE_HANDED:
      return 0.89;
    case EquipmentSlot.SHIELD_HAND:
      return 0.64;
    case EquipmentSlot.TWO_HANDED:
      return 1.0;
    default:
      return 1.0;
  }
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

export function getArmorValue(itemlevel: number, armorType: ArmorType) {
  armorType = ArmorType[armorType];
  switch (armorType) {
    case ArmorType.CLOTH:
      return ((itemlevel - 40) * 1.2) + 53;
    case ArmorType.LEATHER:
      return ((itemlevel - 40) * 2.2) + 110;
    case ArmorType.MAIL:
      return ((itemlevel - 46) * 4.9) + 254;
    case ArmorType.PLATE:
      return ((itemlevel - 44) * 8.9) + 428;
    case ArmorType.SHIELD:
      return ((itemlevel - 44) * 28.3) + 1380;
  }
}

export function getArmorDurabilityModifier(armorType: ArmorType) {
  armorType = ArmorType[armorType];
  switch(armorType) {
    case ArmorType.CLOTH:
      return 0.63;
    case ArmorType.LEATHER:
      return 0.76;
    case ArmorType.MAIL:
      return 0.89;
    case ArmorType.PLATE:
      return 1.0;
    case ArmorType.SHIELD:
      return 1.0;
    default:
      return 1.0;
  }
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
