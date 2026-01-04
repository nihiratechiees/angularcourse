import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Controlflowx } from './controlflowx';

describe('Controlflowx', () => {
  let component: Controlflowx;
  let fixture: ComponentFixture<Controlflowx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Controlflowx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Controlflowx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
