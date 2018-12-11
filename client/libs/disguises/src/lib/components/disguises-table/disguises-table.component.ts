import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Disguise } from '../../models';
import { Router } from '@angular/router';

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
  displayedColumns = ['head', 'id', 'alias', 'description', 'action'];

  constructor(private router: Router) {
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

  viewDisguise(id: number) {
    this.router.navigate([`${id}`]);
  }

  editDisguise(id: number) {
    this.router.navigate([`${id}/edit`]);
  }

  deleteDisguise(id: number) {
    this.delete.emit(id);
  }
}
