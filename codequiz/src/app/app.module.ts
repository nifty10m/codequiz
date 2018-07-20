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
import { SetupComponent } from './components/setup/setup.component';

import { AppComponent } from './containers/app/app.component';
import { IntroComponent } from './containers/intro/intro.component';
import { QuestionLayoutComponent } from './containers/question-layout/question-layout.component';
import { CategoryResolver } from './services/category.service';
import { QuestionResolver } from './services/question-resolver.service';
import { QuizState } from './state/quiz.state';

@NgModule({
    declarations: [
        AppComponent,
        IntroComponent,
        LogoComponent,
        SetupComponent,
        QuestionLayoutComponent,
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
    providers: [
        CategoryResolver,
        QuestionResolver,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
