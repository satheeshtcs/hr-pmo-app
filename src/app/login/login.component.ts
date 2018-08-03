import { Component, OnInit, Inject } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  rForm: FormGroup;                    // A property for our submitted form
  password:string = '';
  emp_id:string = '';
  
  userData	: any = {};
  public data:any=[];
  
  constructor(
              private router:Router,private user:UserService,
              private fb: FormBuilder) {
                this.rForm = fb.group({
                  'emp_id': [null, Validators.required],
                  'password':  [null, Validators.required],
                  'validate' : ''
                });
            
               }
               
	 ngOnInit() {
		this.user.getUserData().subscribe(data => this.userData = data);
    
   
  }
  n=0;
   loginUser(e){
     this.n=0;
     e.preventDefault();
     console.log(e);
     
     var username = e.target.elements[0].value;
     
     var password =btoa(e.target.elements[1].value);

     var role = e.target.elements[2].value;
    
    while(this.userData.data[this.n] != undefined)
    {
     
     if(username == this.userData.data[this.n].emp_id && password == this.userData.data[this.n].password ){
     this.user.setUserLoggenIn();
      this.router.navigate(['dashboard'])
      
      break;
      
     
    }
    
    this.n++;
   }
   if(username=="")
   {
     window.alert('Please enter Employee Id')
   }
   else if(password==""){
    window.alert('Please enter Password')
   }


   else if(this.userData.data[this.n] == undefined){
     window.alert('Wrong Id/Password');
   }
   
 
  


  }
}