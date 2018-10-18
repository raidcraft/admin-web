import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatDividerModule, MatIconModule, MatInputModule, MatMenuModule, MatPaginatorModule, MatSelectModule, MatSortModule, MatTableModule, MatTabsModule, MatTooltipModule } from '@angular/material';
import { NgxsModule } from '@ngxs/store';
import { CreateItemDialogComponent, EditArmorPropertiesComponent, EditEquipmentPropertiesComponent, EditItemAttributesComponent, EditItemGeneralComponent, EditItemPropertiesComponent, EditWeaponPropertiesComponent, ItemFormComponent, ItemsTableComponent, EditItemDialogComponent, EditConsumeablePropertiesComponent } from './components';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './pages';
import { KeysPipe } from './pipes/keys.pipe';
import { ItemsState } from './store/items.state';

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
    EditEquipmentPropertiesComponent,
    EditConsumeablePropertiesComponent,
    ItemFormComponent,
    EditItemDialogComponent
  ],
  entryComponents: [
    CreateItemDialogComponent,
    EditItemDialogComponent
  ]
})
export class ItemsModule { }
