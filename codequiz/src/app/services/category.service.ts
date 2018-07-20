import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../models/category';
import { FetchCategories } from '../state/quiz.actions';

@Injectable({
    providedIn: 'root'
})
export class CategoryResolver implements Resolve<Category[]> {

    constructor(private store: Store) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        // dispatch returns Observable<void> so there won't be any categories in the route data
        return this.store.dispatch(new FetchCategories());
    }
}
