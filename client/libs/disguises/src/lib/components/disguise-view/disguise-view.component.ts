import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Disguise } from '../../models';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'faldoria-disguise-view',
  templateUrl: './disguise-view.component.html',
  styleUrls: ['./disguise-view.component.css']
})
export class DisguiseViewComponent implements OnInit {

  @Input() disguise: Disguise;
  @Output() delete = new EventEmitter<Disguise>();

  get url() {
    return window.location.href;
  }

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  copyUrl() {
    this.snackbar.open(`Disguise URL in die Zwischenablage kopiert.`, null, {duration: 5000})
  }

  deleteDisguise() {
    this.delete.emit(this.disguise);
  }
}
