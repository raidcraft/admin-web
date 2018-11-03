import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisguisesComponent } from './pages/disguises/disguises.component';
import { DisguisesRoutingModule } from './disguises-routing.module';
import { DisguisesTableComponent } from './components';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatIconModule, MatTabsModule, MatTooltipModule, MatDividerModule, MatMenuModule, MatButton, MatButtonModule, MatDialogModule, MatCheckboxModule, MatSelectModule, MatCardModule, MatStepperModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxsModule } from '@ngxs/store';
import { DisguisesStore } from './store';
import { CreateDisguiseComponent } from './pages/create-disguise/create-disguise.component';
import { DisguiseFormComponent } from './components/disguise-form/disguise-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

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
  MatProgressBarModule
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
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
