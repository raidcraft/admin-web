
export class Disguise {
  id: number;
  alias: string;
  description: string;
  skin_texture: string;
  skin_signature: string;
  skin_url: string;

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.alias = data.alias;
      this.description = data.description;
      this.skin_texture = data.skin_texture;
      this.skin_signature = data.skin_signature;
      this.skin_url = data.skin_url;
    }
  }
}
