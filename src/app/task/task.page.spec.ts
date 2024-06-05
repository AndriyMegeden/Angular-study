import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { TaskPage } from './task.page';

describe('TaskPage', () => {
  let component: TaskPage;
  let fixture: ComponentFixture<TaskPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
