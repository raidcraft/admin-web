
export class MinecraftItem {
  id: string;
  name: string;
  type: string;
  meta = 0;

  constructor(data?: any) {
    if (data) {
      this.type = data.text_type || data.minecraft_item || data.type;
      this.name = data.name;
      this.meta = data.meta || data.minecraft_data_dalue || 0;
      this.id = this.type + ':' + this.meta;
    }
  }
}
