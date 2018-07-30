import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from '../models/role.module';

import { User } from '../models/user.module';
import { Http } from '@angular/http';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  
  user: User ={
    user_id: null,
    first_name: null,
    last_name: null,
    emp_id: null,
    password: null,
    contactPreference: null,
    
    gender: null,
    isActive: null,
    phoneNumber: null,
    email: '',
  };

  roles: Role[]=[
    {id:1,name:'HR'},
    {id:2,name:'ASSOCIATE'},
    {id:3,name:'LEAD'},
    {id:3,name:'PMO'}
  ];

  constructor(private http: Http,private router:Router ) { }
  
  ngOnInit() {
    
  }
  saveUser = function(user){
    this.userObj = {
      "emp_id" : user.emp_id,
      "first_name" :user.first_name ,
      "last_name" : user.last_name ,
      "phone_no" : user.phoneNumber,
      "Email" : user.email,
      "Gender" : user.gender
    
    }
 
    this.http.post("http://localhost:8080/adduser", this.userObj).subscribe((res:Response) => {
      this.router.navigate(['added'])
    })
  }

}
