import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { MatDialog } from '@angular/material';
import { CreateItemDialogComponent } from '../../components';
import { AuthService } from '@faldoria/core';

@Component({
  selector: 'rci-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(public items: ItemsService, private dialog: MatDialog, public auth: AuthService) { }

  ngOnInit() {
  }

  openCreateItemDialog() {
    this.dialog.open(CreateItemDialogComponent);
  }

  onDeleteItem(id: number) {
    if (confirm('Bist Du dir sicher, dass Du das Item mit der ID ' + id + ' löschen möchtest?')) {
      this.items.deleteItem(id);
    }
  }
}
