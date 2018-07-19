import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'rxjs/operators';
import { Category } from '../models/category';
import { FetchCategories } from '../state/quiz.actions';

@Injectable()
export class CategoryService implements Resolve<Category[]> {

    private dummyCategories: Category[] = [
        { name: 'Kotlin' },
        { name: 'Java' },
        { name: 'Groovy' },
        { name: 'Javascript' },
    ];

    constructor(private http: HttpClient,
                private store: Store) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        // dispatch returns Observable<void> so there won't be any categories in the route data
        return this.store.dispatch(new FetchCategories());
    }

    fetchCategories(): Observable<Category[]> {
        return of(this.dummyCategories).pipe(delay(1500));
        // return this.http.get<Category[]>('/api/categories');
    }
}
