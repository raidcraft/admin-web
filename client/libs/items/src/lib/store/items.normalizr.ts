import { schema } from 'normalizr';

export const itemCategorySchema = new schema.Entity('categories');
export const minecraftItemSchema = new schema.Entity('minecraft_items');
export const raidCraftItemSchema = new schema.Entity('items', {
  minecraftItem: minecraftItemSchema,
  categories: [itemCategorySchema]
});

export const raidcraftItemsListSchema = [raidCraftItemSchema];
export const minecraftItemsListSchema = [minecraftItemSchema];
