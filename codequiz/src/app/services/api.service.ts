import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Category } from '../models/category';
import { Question } from '../models/question';

interface Page {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
}

// TODO: extend this model for all paged responses
interface PagedResponse<T> {
    _embedded: { [p: string]: T };
    _links: { self: { href: string } };
    page: Page;
}

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    fetchCategories(): Observable<Category[]> {
        return this.http.get<string[]>('/api/categories').pipe(
            map((names: string[]) => names.map((name: string) => ({ name })))
        );
    }

    fetchQuestions({ name }: Category): Observable<Question[]> {
        return this.http.get<PagedResponse<Question[]>>(`/api/questions/${name}`)
            .pipe(
                map((pagedResponse: PagedResponse<Question[]>) => pagedResponse._embedded['questionEntities'])
            );
    }
}
