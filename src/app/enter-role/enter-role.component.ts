import { Component, OnInit } from '@angular/core';
import { Hero }    from '../hero';
import {Http, Response, Headers} from'@angular/http';
import { SampleService } from '../services/sample-service';
import { Userrole } from '../models/userrole.module';

@Component({
  selector: 'app-enter-role',
  templateUrl: './enter-role.component.html',
  styleUrls: ['./enter-role.component.css']
})
export class EnterRoleComponent implements OnInit   {
  user1: Userrole ={
    role_id: null,
    role_code: null,
    role_name: null,
    role_description: null
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