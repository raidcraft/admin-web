import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ArtModel } from '../../models';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'faldoria-art-table',
  templateUrl: './art-table.component.html',
  styleUrls: ['./art-table.component.scss']
})
export class ArtTableComponent implements OnInit {

  @Input() get models(): ArtModel[] {
    return this._models;
  }
  set models(value: ArtModel[]) {
    this._models = value;
    this.dataSource.data = value;
  }
  private _models: ArtModel[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<ArtModel>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['type', 'name', 'description', 'config'];

  constructor() {
    this.dataSource = new MatTableDataSource(this.models);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
