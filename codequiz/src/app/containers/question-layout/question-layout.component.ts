import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Category } from '../../models/category';
import { Question } from '../../models/question';
import { QuizState } from '../../state/quiz.state';

@Component({
    selector: 'cq-question-layout',
    templateUrl: './question-layout.component.html',
    styleUrls: ['./question-layout.component.css']
})
export class QuestionLayoutComponent {

    @Select(state => state.quiz.category)
    category$: Observable<Category>;

    @Select(QuizState.numQuestions)
    numQuestions$: Observable<number>;

    @Select(QuizState.numAnsweredQuestions)
    numAnsweredQuestions$: Observable<number>;

    @Select(QuizState.currentQuestion)
    currentQuestion$: Observable<Question>;

    constructor() {
    }
}
