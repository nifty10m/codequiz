import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTextComponent } from './question-text.component';

describe('QuestionTextComponent', () => {
    let component: QuestionTextComponent;
    let fixture: ComponentFixture<QuestionTextComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuestionTextComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionTextComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
