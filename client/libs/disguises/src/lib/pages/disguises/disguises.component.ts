import { Component, OnInit } from '@angular/core';
import { DisguisesService } from '../../services';
import { Disguise } from '../../models';
import { MatDialog } from '@angular/material';
import { AuthService } from '@faldoria/core';
import { CreateDisguiseComponent } from '../create-disguise/create-disguise.component';

@Component({
  selector: 'faldoria-disguises',
  templateUrl: './disguises.component.html',
  styleUrls: ['./disguises.component.css']
})
export class DisguisesComponent implements OnInit {

  constructor(public disguises: DisguisesService, private dialog: MatDialog, public auth: AuthService) { }

  ngOnInit() {
  }

  onDelete(id: number) {
    if (confirm('Bist Du dir sicher, dass Du die Verkleidung mit der ID ' + id + ' löschen möchtest?')) {
      this.disguises.delete(id);
    }
  }

  onCreate(model: Disguise) {
    this.disguises.create(model);
  }

  openCreateDisguiseDialog() {
    this.dialog.open(CreateDisguiseComponent);
  }
}
