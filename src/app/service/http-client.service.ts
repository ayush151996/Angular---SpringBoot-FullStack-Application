import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class RecordLevels{
  constructor(
    public recordingId:string,
    public recordlevel:string,
  ) {}
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  postId:any;
  constructor(private httpClient:HttpClient,private http: HttpClient) { }
  getRecordlevels()
  {
    console.log("test call - Get");
    return this.httpClient.get<RecordLevels[]>('http://localhost:8080/recordlevels');
  }
  setRecordlevels(){
    console.log("test call - Post");
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = { title: 'Angular POST Request Example' };
    return this.httpClient.post<any>('http://localhost:8080/recordlevels', body, { headers }).subscribe(data => {
      this.postId = data.id;
  });;
 
  }
}
