import { Component, OnInit } from '@angular/core';
import { HttpClientService, RecordLevels } from '../service/http-client.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-record-levels',
  templateUrl: './record-levels.component.html',
  styleUrls: ['./record-levels.component.css']
})
export class RecordLevelsComponent implements OnInit {
    recordlevels:any;
    postId:any;
   
  constructor(
    private httpClientService:HttpClientService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    // const body = { title: 'Angular POST Request Example' };
    // this.http.post<any>('https://reqres.in/api/posts', body, { headers }).subscribe(data => {
    //     this.postId = data.id;
    // });
    this.httpClientService.getRecordlevels().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

  addPerson(RecordLevels:RecordLevels): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(RecordLevels);
    console.log(body)
    return this.http.post('https://reqres.in/api/posts', body,{'headers':headers})
  }
  
  handleSuccessfulResponse(response: RecordLevels[])
{
    this.recordlevels=response;
}
}
