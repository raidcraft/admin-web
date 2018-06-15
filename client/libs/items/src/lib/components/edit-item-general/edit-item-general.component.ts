import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RCItem, ItemType } from '../../models';
import { ItemsService } from '../../services';

@Component({
  selector: 'rci-edit-item-general',
  templateUrl: './edit-item-general.component.html',
  styleUrls: ['./edit-item-general.component.scss']
})
export class EditItemGeneralComponent implements OnInit {

  itemTypes = ItemType;

  @Input() item: RCItem = new RCItem();
  @Input() formGroup: FormGroup;

  constructor(private fb: FormBuilder,
    public items: ItemsService) { }

  ngOnInit() {
    this.formGroup = this.formGroup || this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control(this.item.name || null, Validators.required),
      minecraftItem: this.fb.control(this.item.minecraftItem ? this.item.minecraftItem.id : null, Validators.required),
      itemType: this.fb.control(this.item.itemType || null, Validators.required),
      info: this.fb.control(this.item.info || null)
    });
  }
}
