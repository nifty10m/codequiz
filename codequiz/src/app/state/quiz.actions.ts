import { Category } from '../models/category';

export class StartGame {
    static readonly type = '[Quiz] Start game';

    constructor(public payload: { nickname: string; category: Category }) {
    }
}

export class FetchCategories {
    static readonly type = '[Quiz] Fetch categories';
}

export class FetchQuestions {
    static readonly type = '[Quiz] Fetch questions';

    constructor(public payload: Category) {
    }
}
