import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtComponent } from './pages/art/art.component';
import { ArtTableComponent } from './components/art-table/art-table.component';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatInputModule, MatIconModule, MatTabsModule, MatTooltipModule, MatDividerModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { ArtStore } from './store';
import { ArtRoutingModule } from './art-routing.module';
import { NgxsModule } from '@ngxs/store';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArtService, ArtApiService } from './services';

export const MATERIAL_IMPORTS = [
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  CdkTableModule,
  MatTooltipModule,
  MatDividerModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([ArtStore]),
    ...MATERIAL_IMPORTS,
    ArtRoutingModule
  ],
  declarations: [ArtComponent, ArtTableComponent],
  providers: [
    ArtService,
    ArtApiService
  ]
})
export class ArtModule { }
