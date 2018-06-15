import { schema } from 'normalizr';

export const itemCategorySchema = new schema.Entity('categories');
export const minecraftItemSchema = new schema.Entity('minecraft_items');
export const itemSchema = new schema.Entity('items', {
  minecraftItem: minecraftItemSchema,
  categories: [itemCategorySchema]
});

export const raidcraftItemsListSchema = [itemSchema];
export const minecraftItemsListSchema = [minecraftItemSchema];
