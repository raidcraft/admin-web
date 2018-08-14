import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsTableComponent, CreateItemDialogComponent, EditItemPropertiesComponent, EditItemGeneralComponent, EditItemAttributesComponent } from './components';
import { ItemsComponent } from './pages';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatCheckboxModule, MatIconModule, MatButtonModule, MatDialogModule, MatTabsModule, MatSelectModule, MatTooltipModule, MatDividerModule, MatMenuModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxsModule } from '@ngxs/store';
import { ItemsState } from './store/items.state';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KeysPipe } from './pipes/keys.pipe';
import { EditWeaponPropertiesComponent } from './components/edit-weapon-properties/edit-weapon-properties.component';
import { EditArmorPropertiesComponent } from './components/edit-armor-properties/edit-armor-properties.component';
import { EditEquipmentPropertiesComponent } from './components/edit-equipment-properties/edit-equipment-properties.component';

export const MATERIAL_IMPORTS = [
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatTabsModule,
  MatSelectModule,
  CdkTableModule,
  MatTooltipModule,
  MatDividerModule,
  MatMenuModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    NgxsModule.forFeature([ItemsState]),
    ...MATERIAL_IMPORTS,
    ItemsRoutingModule
  ],
  declarations: [
    ItemsComponent,
    ItemsTableComponent,
    CreateItemDialogComponent,
    KeysPipe,
    EditItemPropertiesComponent,
    EditItemGeneralComponent,
    EditItemAttributesComponent,
    EditWeaponPropertiesComponent,
    EditArmorPropertiesComponent,
    EditEquipmentPropertiesComponent
  ],
  entryComponents: [
    CreateItemDialogComponent
  ]
})
export class ItemsModule { }
