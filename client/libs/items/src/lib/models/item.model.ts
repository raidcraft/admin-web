
export class RCItem {
  id: number;
  name: string;
  categories: RCItemCategory[] = [];
  minecraftItem: MinecraftItem;
  itemLevel: number;
  lore: string;
  maxStackSize: number;
  sellPrice: number;
  itemType: ItemType;
  quality: ItemQuality;
  bindType: ItemBindType;
  enchantmentEffect: boolean;
  lootable: boolean;
  blockUsage: boolean;
  info: string;

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.minecraftItem = new MinecraftItem(data);
      this.itemLevel = data.itemLevel;
      this.lore = data.lore;
      this.quality = data.quality;
      this.bindType = data.bindType;
      this.itemType = data.itemType;
      this.enchantmentEffect = data.enchantmentEffect;
      this.lootable = data.lootable;
      this.blockUsage = data.blockUsage;
      this.maxStackSize = data.maxStackSize;
      this.sellPrice = data.sellPrice;
      this.info = data.info;

      if (data.categories && data.categories.length > 0) {
        this.categories = data.categories.map(category => new RCItemCategory(category));
      }
    }
  }
}

export class RCEquipment extends RCItem {
  equipmentSlot: EquipmentSlot;
  maxDurability: number;
  attributes: RCAttribute[] = [];

  constructor(data?: any) {
    super(data);
    if (data) {
      this.equipmentSlot = data.equipmentSlot;
      this.maxDurability = data.durability;

      if (data.attributes && data.attributes.length > 0) {
        this.attributes = data.attributes.map(attribute => new RCAttribute(attribute));
      }
    }
  }
}

export class RCWeapon extends RCEquipment {
  swingTime: number;
  minDamage: number;
  maxDamage: number;
  weaponType: WeaponType;
}

export class RCArmor extends RCEquipment {
  armorValue: number;
  armorType: ArmorType;
}

export class RCItemCategory {
  id: number;
  name: string;
  description: string;

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
    }
  }
}

export class RCAttribute {
  id: number;
  value: number;
  attributeType: AttributeType;

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.value = data.attributeValue;
      this.attributeType = data.attribute;
    }
  }
}

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

export type EquipmentSlot =
  'ONE_HANDED'
  | 'SHIELD_HAND'
  | 'TWO_HANDED'
  | 'HEAD'
  | 'CHEST'
  | 'LEGS'
  | 'FEET'
  | 'HANDS'
  | 'INVENTORY'
  | 'UNDEFINED';

export type WeaponType =
  'SWORD'
  | 'TWO_HAND_SWORD'
  | 'DAGGER'
  | 'AXE'
  | 'TWO_HAND_AXE'
  | 'POLEARM'
  | 'MACE'
  | 'TWO_HAND_MACE'
  | 'STAFF'
  | 'BOW'
  | 'MAGIC_WAND';

export type ArmorType =
  'CLOTH'
  | 'LEATHER'
  | 'MAIL'
  | 'PLATE'
  | 'SHIELD';

export enum AttributeType {
  STRENGTH = 'Stärke',
  AGILITY = 'Beweglichkeit',
  STAMINA = 'Ausdauer',
  INTELLECT = 'Lntelligenz',
  SPIRIT = 'Willenskraft'
}

export class MinecraftItem {
  id: string;
  name: string;
  type: string;
  meta = 0;

  constructor(data?: any) {
    if (data) {
      this.type = data.text_type || data.minecraftItem;
      this.name = data.name;
      this.meta = data.meta || data.minecraftDataValue || 0;
      this.id = this.type + this.meta;
    }
  }
}
