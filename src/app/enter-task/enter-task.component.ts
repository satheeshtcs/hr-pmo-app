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
    addNewTask = function(user2){
      this.taskObj = {
        "task_id" : user2.task_id,
        "task_status" :user2.task_status ,
        "task_name" : user2.task_name ,
        "task_description" : user2.task_description,
        "actual_start_date" : user2.actual_start_date ,
        "actual_end_date" : user2.actual_end_date
      }
      
      
        this.http.post("http://localhost:8080/addtask", this.taskObj).subscribe((res:Response) => {
        
      })
      
    }
  
  }