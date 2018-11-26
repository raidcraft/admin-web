import { Component, OnInit, Input, Inject } from '@angular/core';
import { TagsService } from '../../services/tags.service';
import { Tag } from '../../models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'faldoria-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.css']
})
export class EditTagComponent implements OnInit {

  @Input() tag = new Tag();
  editing = false;

  constructor(private tags: TagsService, private dialogRef: MatDialogRef<EditTagComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    if (this.data.tag) {
      this.tag = this.data.tag;
      this.editing = true;
    }
  }

  onSave(item: Tag) {
    if (this.editing) {
      this.tags.update(item);
    } else {
      this.tags.create(item);
    }
    this.dialogRef.close();
  }
}
