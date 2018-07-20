import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../models/category';
import { Question } from '../models/question';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    fetchCategories(): Observable<Category[]> {
        return this.http.get<Category[]>('/api/categories');
    }

    fetchQuestions({ name }: Category): Observable<Question[]> {
        return this.http.get<Question[]>(`/api/questions/${name}`);
    }
}
