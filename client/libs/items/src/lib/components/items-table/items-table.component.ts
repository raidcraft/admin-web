import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ItemsTableDataSource } from './items-table-datasource';
import { RCItem } from '../../models';
import { ItemsService } from '../../services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rci-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent implements OnInit {

  @Input() items: Observable<RCItem[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ItemsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  length$: Observable<number>;

  ngOnInit() {
    this.dataSource = new ItemsTableDataSource(this.items, this.paginator, this.sort);
    this.length$ = this.items.pipe(map(items => items.length));
  }
}
