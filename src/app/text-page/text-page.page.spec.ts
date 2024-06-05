import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextPagePage } from './text-page.page';

describe('TextPagePage', () => {
  let component: TextPagePage;
  let fixture: ComponentFixture<TextPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TextPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
