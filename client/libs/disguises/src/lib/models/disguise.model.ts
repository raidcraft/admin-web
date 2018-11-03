import { Skin } from "./skin.model";

export class Disguise {
  id: number;
  alias: string;
  description: string;
  skin_owner: string;
  skin_owner_name: string;
  skin_texture: string;
  skin_signature: string;
  skin_url: string;
  mineskin_id: number;
  skin: Skin;

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.alias = data.alias;
      this.description = data.description;
      this.skin_owner = data.skin_owner;
      this.skin_owner_name = data.skin_owner_name;
      this.skin_texture = data.skin_texture;
      this.skin_signature = data.skin_signature;
      this.skin_url = data.skin_url;
      this.mineskin_id = data.mineskin_id;
      if (data.skin_texture && data.skin_signature && data.skin_owner) {
        this.skin = new Skin(data);
      }
    }
  }
}
