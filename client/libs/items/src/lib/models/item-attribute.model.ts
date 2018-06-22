import { AttributeType } from "./items.model";

export class RCAttribute {
  id: number;
  value: number;
  attribute: AttributeType;

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.value = data.attributeValue || data.attribute_value || data.value;
      this.attribute = data.attribute || data.attributeName || data.attribute_type;
    }
  }

  toApiFormat(): any {
    return {
      id: this.id,
      attribute_value: this.value,
      attribute: this.attribute
    };
  }
}
