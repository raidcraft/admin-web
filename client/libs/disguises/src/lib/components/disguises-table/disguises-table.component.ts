import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Disguise } from '../../models';

@Component({
  selector: 'faldoria-disguises-table',
  templateUrl: './disguises-table.component.html',
  styleUrls: ['./disguises-table.component.css'],
})
export class DisguisesTableComponent implements OnInit {

  @Input() get models(): Disguise[] {
    return this._models;
  }
  set models(value: Disguise[]) {
    this._models = value;
    this.dataSource.data = value;
  }
  private _models: Disguise[] = [];

  @Output() delete = new EventEmitter<number>();
  @Output() create = new EventEmitter<Disguise>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<Disguise>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'alias', 'description', 'action'];

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

  editDisguise(id: number) {

  }

  deleteDisguise(id: number) {
    this.delete.emit(id);
  }
}
