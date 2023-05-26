import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordLevelsComponent } from './record-levels.component';

describe('RecordLevelsComponent', () => {
  let component: RecordLevelsComponent;
  let fixture: ComponentFixture<RecordLevelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordLevelsComponent]
    });
    fixture = TestBed.createComponent(RecordLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
