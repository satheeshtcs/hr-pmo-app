import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

interface myData{
  success:boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class TaskService { 
  
private isUserLoggenIn= JSON.parse(sessionStorage.getItem('UserLoggenIn') || 'false');
private username;

constructor(private http:Http) {
  this.isUserLoggenIn = false;
 }
 getTaskData(){
  return this.http.get("http://localhost:8080/tasklist").map((res:Response) => res.json());   
 }
 getUserRole(){
  return this.http.get("http://localhost:8080/userrole").map((res:Response) => res.json());
 }
 setUserLoggenIn(){
   this.isUserLoggenIn = true;
   
 }

 getUserLoggedIn(){
   return this.isUserLoggenIn;
 }
}
