import { Disguise, IDisguiseAddModel } from '@/models/disguise.model';

export class DisguisesService {

  public getAll() {
    return Disguise.findAll();
  }

  public async getById(id: number) {
    return await Disguise.findById(id);
  }

  public async create(model: IDisguiseAddModel) {
    return await Disguise.create(model);
  }

  public async update(id: number, model: IDisguiseAddModel) {
    return await (await Disguise.findById(id)).update(model);
  }

  public async delete(id: number) {
    const model = await Disguise.findById(id);
    return await model.destroy({ cascade: true });
  }
}
