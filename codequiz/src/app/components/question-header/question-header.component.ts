import { Component, Input } from '@angular/core';
import { Category } from '../../models/category';

@Component({
    selector: 'cq-question-header',
    templateUrl: './question-header.component.html',
    styleUrls: ['./question-header.component.css']
})
export class QuestionHeaderComponent {

    @Input()
    category: Category;

    @Input()
    numQuestions: number;

    @Input()
    numAnsweredQuestions: number;

    constructor() {
    }
}
