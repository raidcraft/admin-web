import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ItemsTableDataSource } from './items-table-datasource';
import { RCItem, ItemQuality, ItemType, ItemBindType } from '../../models';
import { ItemsService } from '../../services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rci-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent implements OnInit {

  @Input() get items(): RCItem[] {
    return this._items;
  }
  set items(value: RCItem[]) {
    this._items = value;
    this.dataSource.data = value;
  }
  private _items: RCItem[] = [];

  @Output() delete = new EventEmitter<number>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<RCItem>;

  qualities = ItemQuality;
  itemTypes = ItemType;
  bindTypes = ItemBindType;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'minecraft_item', 'type', 'quality', 'bind_type', 'action'];

  constructor() {
    this.dataSource = new MatTableDataSource(this.items);
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

  deleteItem(id: number) {
    this.delete.emit(id);
  }
}
