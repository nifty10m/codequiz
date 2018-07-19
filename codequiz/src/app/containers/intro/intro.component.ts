import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { StartGame } from '../../state/quiz.actions';

@Component({
    selector: 'cq-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent {

    constructor(private store: Store) {
    }

    startGame(details) {
        this.store.dispatch(new StartGame(details));
    }

}
