import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { MatDialog } from '@angular/material';
import { CreateItemDialogComponent } from '../../components';

@Component({
  selector: 'rci-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(public items: ItemsService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  openCreateItemDialog() {
    this.dialog.open(CreateItemDialogComponent);
  }
}
