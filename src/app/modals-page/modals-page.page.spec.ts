import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalsPagePage } from './modals-page.page';

describe('ModalsPagePage', () => {
  let component: ModalsPagePage;
  let fixture: ComponentFixture<ModalsPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
