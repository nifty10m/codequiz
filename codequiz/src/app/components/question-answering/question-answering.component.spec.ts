import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnsweringComponent } from './question-answering.component';

describe('QuestionAnsweringComponent', () => {
    let component: QuestionAnsweringComponent;
    let fixture: ComponentFixture<QuestionAnsweringComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QuestionAnsweringComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QuestionAnsweringComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
