import { Component,NgModule } from '@angular/core';
import { RecordModel } from '../record-model';
@Component({
  selector: 'app-recordlevels-forms',
  templateUrl: './recordlevels-forms.component.html',
  styleUrls: ['./recordlevels-forms.component.css']
})

export class RecordlevelsFormsComponent {
 record = new RecordModel('Ayush','5');

onsubmit(){
console.log("onSubmit called");
console.log(this.record);   
 }
}

