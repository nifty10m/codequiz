import { Routes } from '@angular/router';
import { IntroComponent } from './containers/intro/intro.component';
import { QuestionLayoutComponent } from './containers/question-layout/question-layout.component';
import { CategoryResolver } from './services/category.service';
import { QuestionResolver } from './services/question-resolver.service';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: IntroComponent,
        resolve: {
            categories: CategoryResolver,
        },
    },
    {
        path: 'quiz',
        component: QuestionLayoutComponent,
        resolve: {
            questions: QuestionResolver,
        },
    },
];
