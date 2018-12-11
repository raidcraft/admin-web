import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Disguise } from '../../models';
import { DisguisesService } from '../../services';

@Component({
  selector: 'faldoria-view-disguise',
  templateUrl: './view-disguise.component.html',
  styleUrls: ['./view-disguise.component.css']
})
export class ViewDisguiseComponent implements OnInit {

  disguise$: Observable<Disguise>;

  constructor(private route: ActivatedRoute,
    private disguises: DisguisesService,
    private router: Router) {
  }

  ngOnInit() {
    this.disguise$ = this.route.data.pipe(
      map(data => data.disguise)
    );
  }

  onDelete(disguise: Disguise) {
    if (confirm(`Bist du dir sicher, dass du die Disguise ${disguise.alias} (ID: ${disguise.id}) löschen möchtest?`)) {
      this.disguises.delete(disguise.id);
      this.router.navigate(['..']);
    }
  }
}
