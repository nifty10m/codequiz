import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../../models/category';

@Component({
    selector: 'cq-setup',
    templateUrl: './setup.component.html',
    styleUrls: ['./setup.component.css']
})
export class SetupComponent {

    form: FormGroup;

    @Output()
    start = new EventEmitter<{ nickname: string, category: Category }>();

    @Select('quiz.categories')
    categories$: Observable<Category[]>;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            'nameCtrl': ['', [Validators.required, Validators.minLength(5)]],
            'categoryCtrl': ['', Validators.required]
        });
    }

    submit() {
        this.start.emit({
            nickname: this.form.value['nameCtrl'],
            category: { name: this.form.value['categoryCtrl'] }
        });
    }

}
