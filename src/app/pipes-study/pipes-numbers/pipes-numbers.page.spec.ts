import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesNumbersPage } from './pipes-numbers.page';

describe('PipesNumbersPage', () => {
  let component: PipesNumbersPage;
  let fixture: ComponentFixture<PipesNumbersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PipesNumbersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
