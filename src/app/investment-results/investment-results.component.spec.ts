import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentResultsComponent } from './investment-results.component';

describe('InvestmentResultsComponent', () => {
  let component: InvestmentResultsComponent;
  let fixture: ComponentFixture<InvestmentResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
