import { RCItem } from "./item.model";
import { ConsumeableType } from "./items.model";

export class RCConsumeable extends RCItem {
  type: ConsumeableType;
  resourceName: string;
  resourceGain: number;
  percentage: boolean;
  instant: boolean;
  interval: string;
  duration: string;

  constructor(data?: any) {
    super(data);
    if (data) {
      this.type = data.type;
      this.resourceName = data.resourceName || data.resource_name;
      this.resourceGain = data.resourceGain || data.resource_gain;
      this.percentage = data.percentage;
      this.instant = data.instant;
      this.interval = data.interval;
      this.duration = data.duration;
    }
  }

  toApiFormat(): any {
    return {
      ...super.toApiFormat(),
      resource_name: this.resourceName,
      resource_gain: this.resourceGain,
      percentage: this.percentage,
      instant: this.instant,
      interval: this.interval,
      duration: this.duration
    }
  }

  toFormFormat(): any {
    return {
      ...super.toFormFormat(),
      consumeable: {
        resourceName: this.resourceName,
        resourceGain: this.resourceGain,
        percentage: this.percentage,
        instant: this.instant,
        interval: this.interval,
        duration: this.duration
      }
    }
  }
}
