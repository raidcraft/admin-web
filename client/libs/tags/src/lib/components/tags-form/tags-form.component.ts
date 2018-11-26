import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Tag } from '../../models';
import { isNullOrUndefined } from 'util';
import { TagsService } from '../../services/tags.service';
import { of } from 'rxjs';

@Component({
  selector: 'faldoria-tags-form',
  templateUrl: './tags-form.component.html',
  styleUrls: ['./tags-form.component.css'],
})
export class TagsFormComponent implements OnInit {

  @Input() tag = new Tag();
  @Input() editing = false;
  @Output() save = new EventEmitter<Tag>();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private tags: TagsService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: this.fb.control({
        value: this.tag ? this.tag.id : null,
        disabled: this.editing
      }, [Validators.required, this.validateNameNotTaken.bind(this)]),
      description: this.fb.control(this.tag ? this.tag.description : null)
    });
  }

  saveTag() {
    this.save.emit(new Tag({ id: this.formGroup.value.id || this.tag.id, description: this.formGroup.value.description }));
  }

  validateNameNotTaken(control: AbstractControl) {
    return this.tags.hasEntity(control.value as string) ? { existingTag: true } : null;
  }
}
