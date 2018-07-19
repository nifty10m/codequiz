import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../models/category';
import { Question } from '../models/question';
import { FetchCategories, FetchQuestions } from '../state/quiz.actions';

@Injectable()
export class QuestionService implements Resolve<Question[]> {

    private dummyQuestions: Question[] = [
        { question: '1', category: { name: 'Kotlin' }, answers: [] },
        { question: '2', category: { name: 'Kotlin' }, answers: [] },
        { question: '3', category: { name: 'Kotlin' }, answers: [] },
        { question: '4', category: { name: 'Kotlin' }, answers: [] },
        { question: '5', category: { name: 'Kotlin' }, answers: [] },
    ];

    constructor(private http: HttpClient,
                private store: Store) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question[]> {
        // dispatch returns Observable<void> so there won't be any questions in the route data
        const category: Category = this.store.selectSnapshot(state => state.category);
        console.log(category);
        return this.store.dispatch(new FetchQuestions({ name: 'Kotlin' }));
    }

    fetchQuestions({ name }: Category): Observable<Question[]> {
        return of(this.dummyQuestions);
        // return this.http.get<Question[]>(`/api/questions/${name}`);
    }
}
