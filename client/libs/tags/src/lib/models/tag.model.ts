
export class Tag {

  id: string;
  description?: string;

  constructor(data?: { id: string, description?: string }) {
    if (data) {
      this.id = data.id;
      this.description = data.description;
    }
  }
}
