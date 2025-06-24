import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofOfReservesComponent } from './proof-of-reserves.component';

describe('ProofOfReservesComponent', () => {
  let component: ProofOfReservesComponent;
  let fixture: ComponentFixture<ProofOfReservesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProofOfReservesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofOfReservesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
