import { Answer } from './answer';
import { Category } from './category';

export interface Question {
    question: string;
    answers: Answer[];
    category: Category;
}
