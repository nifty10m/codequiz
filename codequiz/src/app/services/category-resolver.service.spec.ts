import { inject, TestBed } from '@angular/core/testing';

import { CategoryResolver } from './category-resolver.service';

describe('CategoryResolver', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [CategoryResolver]
        });
    });

    it('should be created', inject([CategoryResolver], (service: CategoryResolver) => {
        expect(service).toBeTruthy();
    }));
});
