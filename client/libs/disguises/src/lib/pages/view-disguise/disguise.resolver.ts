import { Disguise } from "../../models";
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { DisguisesService } from "../../services";
import { isNullOrUndefined } from "util";
import { switchMap, filter, map, tap, take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DisguiseResolver implements Resolve<Observable<Disguise>> {

  constructor(private disguises: DisguisesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Disguise> {
    return this.disguises.getDisguise(+route.params['id']).pipe(
      filter(disguise => !isNullOrUndefined(disguise)),
      take(1)
    );
  }
}
