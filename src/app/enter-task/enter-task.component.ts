import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from'@angular/http';
import {Usertask} from '../models/task.module';

@Component({
  selector: 'app-enter-task',
  templateUrl: './enter-task.component.html',
  styleUrls: ['./enter-task.component.css']
})
export class EnterTaskComponent implements OnInit {

  user1: Usertask ={
    task_id: null,
    task_status: null,
    task_name: null,
    task_description: null,
    actual_start_date: null,
    actual_end_date: null
  };
  
    addUserRole(user_role_id: HTMLInputElement, user_code: HTMLInputElement, user_name: HTMLInputElement, user_description: HTMLInputElement):
    boolean{
      console.log(`Adding UserRoleId : ${user_role_id.value} and RoleCode : ${user_code.value} and RoleName : ${user_name.value} and RoleDescription : ${user_description.value} `);
      return false;
    }

   constructor(private http: Http ) { }

    ngOnInit() {
    }
    addNewRole = function(user1){
      this.userObj = {
        "role_id" : user1.role_id,
        "role_code" :user1.role_code ,
        "role_name" : user1.role_name ,
        "role_description" : user1.role_description
      }
      
      
        this.http.post("http://localhost:8080/addrole", this.userObj).subscribe((res:Response) => {
        
      })
      
    }
  
  }