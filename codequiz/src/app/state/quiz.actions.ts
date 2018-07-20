import { Answer } from '../models/answer';
import { Category } from '../models/category';

export class StartGame {
    static readonly type = '[Quiz] Start game';

    constructor(public payload: { nickname: string; category: Category }) {
    }
}

export class AnswerQuestion {
    static readonly type = '[Quiz] Answer question';

    constructor(public payload: Answer) {
    }
}

export class EndGame {
    static readonly type = '[Quiz] End game';
}

export class FetchCategories {
    static readonly type = '[Quiz] Fetch categories';
}

export class FetchQuestions {
    static readonly type = '[Quiz] Fetch questions';

    constructor(public payload: Category) {
    }
}
