import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Answer } from '../../models/answer';
import { Question } from '../../models/question';
import { AnswerQuestion } from '../../state/quiz.actions';

@Component({
    selector: 'cq-question-answering',
    templateUrl: './question-answering.component.html',
    styleUrls: ['./question-answering.component.css']
})
export class QuestionAnsweringComponent {

    @Input()
    question: Question;

    constructor(private store: Store) {
    }

    answerQuestion(answer: Answer) {
        this.store.dispatch(new AnswerQuestion(answer));
    }
}
