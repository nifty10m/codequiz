import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../models/category';
import { Question } from '../models/question';
import { FetchQuestions } from '../state/quiz.actions';

@Injectable({
    providedIn: 'root'
})
export class QuestionResolver implements Resolve<Question[]> {

    constructor(private store: Store) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question[]> {
        // dispatch returns Observable<void> so there won't be any questions in the route data
        const category: Category = this.store.selectSnapshot(state => state.quiz.category);
        return this.store.dispatch(new FetchQuestions({ name: category.name }));
    }
}
