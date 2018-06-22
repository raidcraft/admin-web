import { RCItemCategory } from "./item-category.model";
import { MinecraftItem } from "./minecraft-item.model";
import { ItemType, ItemQuality, ItemBindType } from "./items.model";

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
      this.minecraftItem = new MinecraftItem(data.minecraftItem || data);
      this.itemLevel = data.itemLevel || data.item_level;
      this.lore = data.lore;
      this.quality = data.quality;
      this.bindType = data.bindType || data.bind_type;
      this.itemType = data.itemType || data.item_type;
      this.enchantmentEffect = data.enchantmentEffect || data.enchantment_effect;
      this.lootable = data.lootable;
      this.blockUsage = data.blockUsage || data.block_usage;
      this.maxStackSize = data.maxStackSize || data.max_stack_size;
      this.sellPrice = data.sellPrice || data.sell_price;
      this.info = data.info;

      if (data.categories && data.categories.length > 0) {
        this.categories = data.categories.map(category => new RCItemCategory(category));
      }
    }
  }

  toApiFormat(): any {
    return {
      name: this.name,
      minecraft_item: this.minecraftItem.type,
      minecraft_data_dalue: this.minecraftItem.meta,
      item_level: this.itemLevel,
      lore: this.lore,
      quality: this.quality,
      bind_type: this.bindType,
      item_type: this.itemType,
      enchantment_effect: this.enchantmentEffect,
      lootable: this.lootable,
      block_usage: this.blockUsage,
      max_stack_size: this.maxStackSize,
      sell_price: this.sellPrice,
      info: this.info
    };
  }
}
