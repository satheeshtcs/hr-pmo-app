import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http:Http) { }
  
  getListData(){
   return this.http.get("http://localhost:8080/demoList").map((res:Response) => res.json());   
  }
}
