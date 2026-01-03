import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interpolx } from './interpolx';

describe('Interpolx', () => {
  let component: Interpolx;
  let fixture: ComponentFixture<Interpolx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interpolx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Interpolx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
