import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { MatDialog } from '@angular/material';
import { CreateItemDialogComponent, EditItemDialogComponent } from '../../components';
import { AuthService } from '@faldoria/core';
import { take } from 'rxjs/operators';

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

  openEditItemDialog(id: number) {
    this.items.editItem(id).pipe(take(1)).subscribe(() => this.dialog.open(EditItemDialogComponent));
  }

  onDeleteItem(id: number) {
    if (confirm('Bist Du dir sicher, dass Du das Item mit der ID ' + id + ' löschen möchtest?')) {
      this.items.deleteItem(id);
    }
  }
}
