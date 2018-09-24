
export class ArtModel {
  type: string;
  name: string;
  description: string;
  config: string[];

  constructor(data?: any) {
    if (data) {
      this.type = (data.action_type || data.type).toUpperCase();
      this.name = data.name;
      this.description = data.desc || data.description;
      if (data.conf) {
        const config = data.conf as string;
        this.config = config.split(";");
      }
    }
  }
}
