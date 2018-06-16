import { Items, ITemsAddModel } from 'models/items.model';

export class ItemsService {

  public getAll() {
    return Items.all();
  }

  public getItemById(id: number) {
    return Items.findById(id);
  }

  public createItem(item: ITemsAddModel) {
    return Items.create(item);
  }
}
