
export class Tag {

  id: string;
  description?: string;
  auto_generated = false;

  constructor(data?: { id: string, description?: string }) {
    if (data) {
      this.id = data.id.toLowerCase();
      this.description = data.description;
      this.auto_generated = false;
    }
  }
}
