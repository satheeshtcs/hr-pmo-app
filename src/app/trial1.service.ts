import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'; 



@Injectable({
  providedIn: 'root'
})
export class Trial1Service {
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
        console.log(data)
    });
  }
  
  public getJSON(): Observable<any> {
    return this.http.get("./assets/data.json")
  }

  
}
