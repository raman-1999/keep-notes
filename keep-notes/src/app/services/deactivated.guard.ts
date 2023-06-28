import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NoteDetailsComponent } from '../note-details/note-details.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivatedGuard implements CanDeactivate<NoteDetailsComponent> {
  canDeactivate(
    component: NoteDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
  
}
