import { Tags, ITagAddModel } from "@/models/tag.model";


export class TagsService {

  public getAll() {
    return Tags.findAll();
  }

  public async getById(id: string) {
    return await Tags.findById(id);
  }

  public async create(model: ITagAddModel) {
    return await Tags.create(model);
  }

  public async update(id: string, model: ITagAddModel) {
    return await (await Tags.findById(id)).update(model);
  }

  public async delete(id: string) {
    const model = await Tags.findById(id);
    return await model.destroy({ cascade: true });
  }
}
