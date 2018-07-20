import { Component, Input } from '@angular/core';
import { Question } from '../../models/question';

@Component({
    selector: 'cq-question-text',
    templateUrl: './question-text.component.html',
    styleUrls: ['./question-text.component.css']
})
export class QuestionTextComponent {

    @Input()
    question: Question;

    constructor() {
    }

}
