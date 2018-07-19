import { Navigate } from '@ngxs/router-plugin';
import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { Answer } from '../models/answer';
import { Category } from '../models/category';
import { Question } from '../models/question';
import { CategoryService } from '../services/category.service';
import { QuestionService } from '../services/question.service';
import { FetchCategories, FetchQuestions, StartGame } from './quiz.actions';

interface QuizStateModel {
    nickname: string;
    category: Category;
    categories: Category[];
    questions: Question[];
    givenAnswers: Answer[];
}

@State<QuizStateModel>({
    name: 'quiz',
    defaults: {
        nickname: null,
        category: null,
        categories: [],
        questions: [],
        givenAnswers: [],
    }
})
export class QuizState {

    constructor(private categoryService: CategoryService,
                private questionService: QuestionService) {
    }

    @Action(FetchCategories)
    fetchCategories({ patchState }: StateContext<QuizStateModel>) {
        return this.categoryService.fetchCategories()
            .pipe(
                tap(categories => patchState({ categories }))
            );
    }

    @Action(FetchQuestions)
    fetchQuestions({ patchState }: StateContext<QuizStateModel>, { payload }: FetchQuestions) {
        return this.questionService.fetchQuestions(payload)
            .pipe(
                tap(questions => patchState({ questions }))
            );
    }

    @Action(StartGame)
    startGame({ dispatch, patchState }: StateContext<QuizStateModel>, { payload }: StartGame) {
        patchState({ nickname: payload.nickname, category: payload.category });
        console.log('starting game');
        return dispatch(new Navigate(['/quiz']));
    }

}
