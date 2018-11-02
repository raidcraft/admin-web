import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisguisesComponent } from './pages/disguises/disguises.component';
import { DisguisesRoutingModule } from './disguises-routing.module';
import { DisguisesTableComponent } from './components';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatIconModule, MatTabsModule, MatTooltipModule, MatDividerModule, MatMenuModule, MatButton, MatButtonModule, MatDialogModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxsModule } from '@ngxs/store';
import { DisguisesStore } from './store';
import { CreateDisguiseComponent } from './pages/create-disguise/create-disguise.component';
import { DisguiseFormComponent } from './components/disguise-form/disguise-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export const MATERIAL_IMPORTS = [
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  CdkTableModule,
  MatTooltipModule,
  MatDividerModule,
  MatMenuModule,
  MatButtonModule,
  MatDialogModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DisguisesRoutingModule,
    ...MATERIAL_IMPORTS,
    NgxsModule.forFeature([DisguisesStore])
  ],
  declarations: [
    DisguisesComponent,
    DisguisesTableComponent,
    CreateDisguiseComponent,
    DisguiseFormComponent
  ],
  entryComponents: [
    CreateDisguiseComponent
  ]
})
export class DisguisesModule { }
