import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Materialuix } from './materialuix';

describe('Materialuix', () => {
  let component: Materialuix;
  let fixture: ComponentFixture<Materialuix>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Materialuix]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Materialuix);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
