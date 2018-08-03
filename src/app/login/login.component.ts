import { Component, OnInit, Inject } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  rForm: FormGroup;                    // A property for our submitted form
  password:string = '';
  emp_id:string = '';
  userData1	: any = {};
  userData	: any = {};
  public data:any=[];
  

  
  constructor(
              private router:Router,private user:UserService,
              private fb: FormBuilder,
            private datas: DataService) {
                this.rForm = fb.group({
                  'emp_id': [null, Validators.required],
                  'password':  [null, Validators.required],
                  'validate' : ''
                });
            
               }
               
	 ngOnInit() {
    this.user.getUserData().subscribe(data => this.userData = data);
    
    this.user.getUserData1().subscribe(data => this.userData1 = data);
   
  }
  n=0;
  b=0;
   loginUser(e){
     this.n=0;
     this.b=0;
     e.preventDefault();
     console.log(e);
     
     var username = e.target.elements[0].value;
     
     var password =btoa(e.target.elements[1].value);

     var role = e.target.elements[2].value;
     this.datas.setRoleObj( role);
    while(this.userData.data[this.n] != undefined)
    {
     
     if(username == this.userData.data[this.n].emp_id && password == this.userData.data[this.n].password ){
     this.user.setUserLoggenIn();
     while(this.userData1.data[this.b] != undefined){
     if(this.userData1.data[this.b].emp_id==username ){
      if(this.userData1.data[this.b].role_code!=role )
      {
      window.alert('The Role you have entered is wrong ');
      this.router.navigate(['']);
      break;
      }
else{
  if(role=="adm")
  {
   this.router.navigate(['admin']) 
  }
  if(role=="asso")
  {
   this.router.navigate(['associate']) 
  }
  if(role=="lead")
  {
   this.router.navigate(['lead']) 
  }
  if(role=="head")
  {
   this.router.navigate(['head']) 
  }
  
}
    }
    this.b++;

  }
  
    
     
      
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
