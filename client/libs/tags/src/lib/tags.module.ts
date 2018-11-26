import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { TagsComponent } from './pages/tags/tags.component';
import { TagsTableComponent } from './components/tags-table/tags-table.component';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatCheckboxModule, MatIconModule, MatButtonModule, MatDialogModule, MatTabsModule, MatSelectModule, MatTooltipModule, MatDividerModule, MatMenuModule, MatCardModule, MatStepperModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { TagsFormComponent } from './components/tags-form/tags-form.component';
import { EditTagComponent } from './pages/edit-tag/edit-tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    ...MATERIAL_IMPORTS,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AkitaNgDevtools.forRoot(),
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: TagsComponent }
    ])
  ],
  declarations: [
    TagsComponent,
    TagsTableComponent,
    TagsFormComponent,
    EditTagComponent
  ],
  entryComponents: [
    EditTagComponent
  ]
})
export class TagsModule { }
