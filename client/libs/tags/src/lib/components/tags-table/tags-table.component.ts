import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Tag } from '../../models';

@Component({
  selector: 'faldoria-tags-table',
  templateUrl: './tags-table.component.html',
  styleUrls: ['./tags-table.component.css'],
})
export class TagsTableComponent implements OnInit {

  @Input() get models(): Tag[] {
    return this._models;
  }
  set models(value: Tag[]) {
    this._models = value;
    this.dataSource.data = value;
  }
  private _models: Tag[] = [];

  @Output() delete = new EventEmitter<Tag>();
  @Output() edit = new EventEmitter<Tag>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Tag>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'description', 'action'];

  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Tag>(this.models);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  editTag(tag: Tag) {
    this.edit.emit(tag);
  }

  deleteTag(tag: Tag) {
    this.delete.emit(tag);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
