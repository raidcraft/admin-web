import { RCItem, MinecraftItem } from "../models";
import { BehaviorSubject } from "rxjs";
import { ItemsService } from "./items.service";

export class ItemsServiceMock {

  minecraftItems$ = new BehaviorSubject<MinecraftItem[]>([]);
  items$ = new BehaviorSubject<RCItem[]>([]);

  createItem(item: RCItem) { }
}

export const itemsServiceMockProvider = {
  provide: ItemsService,
  useClass: ItemsServiceMock
};
