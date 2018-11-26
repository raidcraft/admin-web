import { Component, OnInit } from '@angular/core';
import { TagsService } from '../../services/tags.service';
import { Tag } from '../../models';
import { MatDialog } from '@angular/material';
import { EditTagComponent } from '../edit-tag/edit-tag.component';
import { AuthService } from '@faldoria/core';

@Component({
  selector: 'faldoria-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  constructor(public tags: TagsService, private dialog: MatDialog, public auth: AuthService) { }

  ngOnInit() {
    this.tags.load();
  }

  onDelete(tag: Tag) {
    if (confirm('Bist Du dir sicher, dass Du den Tag ' + tag.id + ' löschen möchtest?')) {
      this.tags.delete(tag);
    }
  }

  onCreate(model: Tag) {
    this.tags.create(model);
  }

  openCreateTagDialog() {
    this.dialog.open(EditTagComponent);
  }

  onEdit(tag: Tag) {
    this.dialog.open(EditTagComponent, { data: { tag: tag } })
  }
}
