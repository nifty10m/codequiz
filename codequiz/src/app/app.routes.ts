import { Routes } from '@angular/router';
import { IntroComponent } from './containers/intro/intro.component';
import { QuestionLayoutComponent } from './containers/question-layout/question-layout.component';
import { CategoryService } from './services/category.service';
import { QuestionService } from './services/question.service';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: IntroComponent,
        resolve: {
            categories: CategoryService,
        },
    },
    {
        path: 'quiz',
        component: QuestionLayoutComponent,
        resolve: {
            questions: QuestionService,
        },
    },
];
