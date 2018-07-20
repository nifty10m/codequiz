import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment';
import { APP_ROUTES } from './app.routes';
import { LogoComponent } from './components/logo/logo.component';
import { QuestionAnsweringComponent } from './components/question-answering/question-answering.component';
import { QuestionHeaderComponent } from './components/question-header/question-header.component';
import { QuestionTextComponent } from './components/question-text/question-text.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';
import { SetupComponent } from './components/setup/setup.component';

import { AppComponent } from './containers/app/app.component';
import { IntroComponent } from './containers/intro/intro.component';
import { OutroComponent } from './containers/outro/outro.component';
import { QuestionLayoutComponent } from './containers/question-layout/question-layout.component';
import { QuizState } from './state/quiz.state';

@NgModule({
    declarations: [
        AppComponent,
        IntroComponent,
        LogoComponent,
        SetupComponent,
        QuestionLayoutComponent,
        QuestionTextComponent,
        QuestionHeaderComponent,
        QuestionAnsweringComponent,
        OutroComponent,
        QuizResultComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(APP_ROUTES),
        ReactiveFormsModule,
        HttpClientModule,
        NgxsModule.forRoot([QuizState]),
        NgxsStoragePluginModule.forRoot({
            key: 'quiz'
        }),
        NgxsRouterPluginModule.forRoot(),
        environment.production ? [] : NgxsReduxDevtoolsPluginModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
