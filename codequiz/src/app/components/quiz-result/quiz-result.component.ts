import { Component, Input } from '@angular/core';

@Component({
    selector: 'cq-quiz-result',
    templateUrl: './quiz-result.component.html',
    styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent {

    @Input()
    nickname: string;

    @Input()
    numAnsweredQuestions: number;

    @Input()
    numCorrectAnswers: number;

    constructor() {
    }
}
