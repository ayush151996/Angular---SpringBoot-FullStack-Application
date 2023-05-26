import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {RecordLevelsComponent } from './record-levels/record-levels.component';

const routes: Routes = [{path:'', component: RecordLevelsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
