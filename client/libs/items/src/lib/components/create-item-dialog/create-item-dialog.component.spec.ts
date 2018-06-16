import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemDialogComponent } from './create-item-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { itemsServiceMockProvider } from '../../services/items.service.mock';
import { ItemType, ItemBindType, ItemQuality, RCItem } from '../../models';
import { EditItemAttributesComponent } from '../edit-item-attributes';
import { EditItemGeneralComponent } from '../edit-item-general';
import { EditItemPropertiesComponent } from '../edit-item-properties';
import { KeysPipe } from '../../pipes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CreateItemDialogComponent', () => {

  const testFormModel = {
    general: {
      name: 'Test',
      minecraftItem: 'test_1',
      itemType: ItemType.UNDEFINED,
      bindType: ItemBindType.BOE,
      quality: ItemQuality.COMMON,
      additional: {}
    },
    properties: {
      price: 12.54,
      info: null,
      lore: null,
      stackSize: 12,
      blockUseage: true,
      enchatmentEffect: true,
      lootable: false
    }
  };

  const expectedModel: Partial<RCItem> = {
    name: 'Test',
    bindType: ItemBindType.BOE,
    itemType: ItemType.UNDEFINED,
    quality: ItemQuality.COMMON,
    sellPrice: 12.54,
    info: null,
    lore: null,
    maxStackSize: 12,
    blockUsage: true,
    enchantmentEffect: true,
    lootable: false
  };

  let component: CreateItemDialogComponent;
  let fixture: ComponentFixture<CreateItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        CreateItemDialogComponent,
        EditItemAttributesComponent,
        EditItemGeneralComponent,
        EditItemPropertiesComponent,
        KeysPipe
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: MatDialogRef, use: { close } },
        itemsServiceMockProvider
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#buildModel()', () => {

    beforeEach(() => {
      component.formGroup.patchValue(testFormModel);
      fixture.detectChanges();
    });

    it('should set all properties of RCItem', () => {
      const item = component.buildModel();

      expect(item).toEqual(expectedModel);
    })
  });
});
