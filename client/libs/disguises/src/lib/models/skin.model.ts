export interface Urls {
  skin: string;
}

export interface Texture {
  value: string;
  signature: string;
  url: string;
  urls: Urls;
}

export interface Data {
  uuid: string;
  texture: Texture;
}

export interface MineSkin {
  id: number;
  name: string;
  model: string;
  data: Data;
  timestamp: number;
  duration: number;
  private: boolean;
  views: number;
  nextRequest: number;
}

function isMineSkin(data: any): data is MineSkin {
  return (<MineSkin>data).data !== undefined;
}


export class Skin {

  id: number;
  imageUrl: string;
  headUrl: string;
  texture: string;
  signature: string;
  textureUrl: string;
  uuid: string;

  constructor(data?: any) {
    if (isMineSkin(data)) {
      const mineSkin = data as MineSkin;
      this.id = mineSkin.id;
      this.texture = mineSkin.data.texture.value;
      this.signature = mineSkin.data.texture.signature;
      this.textureUrl = mineSkin.data.texture.url;
      this.uuid = mineSkin.data.uuid;
    } else if (data) {
      this.id = data.mineskin_id;
      this.texture = data.skin_texture;
      this.signature = data.skin_signature;
      this.textureUrl = data.skin_url;
      this.uuid = data.skin_owner;
    }

    this.imageUrl = `https://api.mineskin.org/render/${this.id ? this.id : this.uuid}/skin`;
    this.headUrl = `https://api.mineskin.org/render/${this.id ? this.id : this.uuid}/head`;
  }
}
