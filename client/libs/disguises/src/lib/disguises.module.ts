import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisguisesComponent } from './pages/disguises/disguises.component';
import { DisguisesRoutingModule } from './disguises-routing.module';
import { DisguisesTableComponent, DisguiseFormComponent, DisguiseViewComponent } from './components';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatIconModule, MatTabsModule, MatTooltipModule, MatDividerModule, MatMenuModule, MatButton, MatButtonModule, MatDialogModule, MatCheckboxModule, MatSelectModule, MatCardModule, MatStepperModule, MatProgressSpinnerModule, MatProgressBarModule, MatSnackBarModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreateDisguiseComponent, ViewDisguiseComponent, EditDisguiseComponent } from './pages';
import { ClipboardModule } from 'ngx-clipboard';

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
  MatMenuModule,
  MatCardModule,
  MatStepperModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSnackBarModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    DisguisesRoutingModule,
    ClipboardModule,
    ...MATERIAL_IMPORTS
  ],
  declarations: [
    DisguisesComponent,
    DisguisesTableComponent,
    CreateDisguiseComponent,
    DisguiseFormComponent,
    ViewDisguiseComponent,
    EditDisguiseComponent,
    DisguiseViewComponent
  ],
  entryComponents: [
    CreateDisguiseComponent,
    ViewDisguiseComponent
  ]
})
export class DisguisesModule { }
