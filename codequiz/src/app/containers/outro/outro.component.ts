import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { RestartGame } from '../../state/quiz.actions';
import { QuizState } from '../../state/quiz.state';

@Component({
    selector: 'cq-outro',
    templateUrl: './outro.component.html',
    styleUrls: ['./outro.component.css']
})
export class OutroComponent {

    @Select(state => state.quiz.nickname)
    nickname$: Observable<string>;

    @Select(QuizState.numAnsweredQuestions)
    numAnsweredQuestions$: Observable<number>;

    @Select(QuizState.numCorrectAnswers)
    numCorrectAnswers$: Observable<number>;

    constructor(private store: Store) {
    }

    restartGame() {
        this.store.dispatch(new RestartGame());
    }
}
