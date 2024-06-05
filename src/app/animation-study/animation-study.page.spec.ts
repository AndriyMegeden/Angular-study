import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimationStudyPage } from './animation-study.page';

describe('AnimationStudyPage', () => {
  let component: AnimationStudyPage;
  let fixture: ComponentFixture<AnimationStudyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnimationStudyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
