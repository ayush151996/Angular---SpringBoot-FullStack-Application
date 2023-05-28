import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordlevelsFormsComponent } from './recordlevels-forms.component';


describe('RecordlevelsFormsComponent', () => {
  let component: RecordlevelsFormsComponent;
  let fixture: ComponentFixture<RecordlevelsFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecordlevelsFormsComponent]
    });
    fixture = TestBed.createComponent(RecordlevelsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
