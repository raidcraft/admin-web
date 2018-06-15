import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsTableComponent, CreateItemDialogComponent, EditItemPropertiesComponent, EditItemGeneralComponent } from './components';
import { ItemsComponent } from './pages';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatCheckboxModule, MatIconModule, MatButtonModule, MatDialogModule, MatTabsModule, MatSelectModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { ItemsState } from './store/items.state';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KeysPipe } from './pipes/keys.pipe';

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
  CdkTableModule
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
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
    EditItemGeneralComponent
  ],
  entryComponents: [
    CreateItemDialogComponent
  ]
})
export class ItemsModule { }
