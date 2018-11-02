import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';
import { Disguise } from '../../models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'faldoria-disguise-form',
  templateUrl: './disguise-form.component.html',
  styleUrls: ['./disguise-form.component.css']
})
export class DisguiseFormComponent implements OnInit {

  @Input() disguise = new Disguise();
  @Output() save = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
