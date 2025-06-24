import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiFirstComponent } from './api-first.component';

describe('ApiFirstComponent', () => {
  let component: ApiFirstComponent;
  let fixture: ComponentFixture<ApiFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
