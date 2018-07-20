import { Navigate } from '@ngxs/router-plugin';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Answer } from '../models/answer';
import { Category } from '../models/category';
import { Question } from '../models/question';
import { ApiService } from '../services/api.service';
import { AnswerQuestion, EndGame, FetchCategories, FetchQuestions, RestartGame, StartGame } from './quiz.actions';

interface QuizStateModel {
    nickname: string;
    category: Category;
    categories: Category[];
    questions: Question[];
    question: number;
    givenAnswers: Answer[];
}

@State<QuizStateModel>({
    name: 'quiz',
    defaults: {
        nickname: null,
        category: null,
        categories: [],
        question: 0,
        questions: [],
        givenAnswers: [],
    }
})
export class QuizState {

    @Selector()
    static currentQuestion(state: QuizStateModel) {
        return state.questions[state.question];
    }

    @Selector()
    static numQuestions(state: QuizStateModel) {
        return state.questions.length;
    }

    @Selector()
    static numAnsweredQuestions(state: QuizStateModel) {
        return state.givenAnswers.length;
    }

    @Selector()
    static numCorrectAnswers(state: QuizStateModel) {
        return state.givenAnswers.filter(answer => answer.correctAnswer).length;
    }

    constructor(private api: ApiService) {
    }

    @Action(FetchCategories)
    fetchCategories({ patchState }: StateContext<QuizStateModel>) {
        return this.api.fetchCategories()
            .pipe(
                tap(categories => patchState({ categories }))
            );
    }

    @Action(FetchQuestions)
    fetchQuestions({ patchState }: StateContext<QuizStateModel>, { payload }: FetchQuestions) {
        return this.api.fetchQuestions(payload)
            .pipe(
                tap(questions => patchState({ questions }))
            );
    }

    @Action(StartGame)
    startGame({ dispatch, patchState }: StateContext<QuizStateModel>, { payload }: StartGame) {
        patchState({
            nickname: payload.nickname,
            category: payload.category,
            givenAnswers: [],
            question: 0,
        });
        return dispatch(new Navigate(['/quiz']));
    }

    @Action(RestartGame)
    restartGame({ dispatch, patchState }: StateContext<QuizStateModel>) {
        patchState({
            givenAnswers: [],
            question: 0,
        });
        return dispatch(new Navigate(['/quiz']));
    }

    @Action(AnswerQuestion)
    answerQuestion({ dispatch, getState, patchState }: StateContext<QuizStateModel>, { payload }: AnswerQuestion) {
        const { givenAnswers, question, questions } = getState();
        patchState({
            givenAnswers: [...givenAnswers, payload],
            question: question + 1
        });
        if (questions.length <= question + 1) {
            return dispatch(new EndGame());
        }
    }

    @Action(EndGame)
    endGame({ dispatch }: StateContext<QuizStateModel>) {
        dispatch(new Navigate(['/finish']));
    }

}
