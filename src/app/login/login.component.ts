import { Component, OnInit, Inject } from '@angular/core';

import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { DataService } from '../data.service';
import { ToasterService } from '../toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  b=0;
  c=0;
  p=0;
  q=0;
  r=0;
  rForm: FormGroup;                    // A property for our submitted form
  password:string = '';
  emp_id:string = '';
  
  userData	: any = {};
  userData1: any = {};
  public data:any=[];
rolex: any =[];
  
  constructor(
              private router:Router,private user:UserService,private tservice:ToasterService,
              private fb: FormBuilder,private sessionst:SessionStorageService, private datas:DataService) {
                this.rForm = fb.group({
                  'emp_id': [null, Validators.required],
                  'password':  [null, Validators.required],
                  'validate' : ''
                });
            
               }
               
	 ngOnInit() {
		this.user.getUserData().subscribe(data => this.userData = data);
    this.sessionst.store("logdata",false);
    this.user.getUserRoleMap().subscribe(data => this.userData1= data);
  }
  
  
  n=0;
   loginUser(e){
    
     this.n=0;
     this.b=0;
     this.c=0;
     e.preventDefault();
     console.log(e);
     
     var username = e.target.elements[0].value;
     
     var password =btoa(e.target.elements[1].value);

     var role = e.target.elements[2].value;
     
     
    
     while(this.userData.data[this.n] != undefined)
    {
     if(username == this.userData.data[this.n].emp_id && password == this.userData.data[this.n].password ){
    
     while(this.userData1.data[this.b] != undefined){
      if(this.userData1.data[this.b].emp_id==username ){
        this.rolex[this.p]=this.userData1.data[this.b].role_code;
        this.p++;
      }
    this.b++;

  }
  while(this.rolex[this.q]!=undefined){
    if(this.rolex[this.q]==role){
      this.r=1;
      this.user.setUserLoggenIn();
      this.sessionst.store("username",this.userData.data[this.n].emp_id);
      
      this.sessionst.store("logdata",true);
      this.sessionst.store("Role",role);
    if(this.rolex[this.q]=="adm"){
      this.router.navigate(['admin']) 
     
    }
    if(this.rolex[this.q]=="asso"){
      this.router.navigate(['associate']) 
    
    }
    if(this.rolex[this.q]=="lead"){
      this.router.navigate(['lead']) 
    }
    if(this.rolex[this.q]=="head"){
      this.router.navigate(['head']) 
    }
  }
   this.q++; 
}
      
      break;
      
    }
    
    
    this.n++;
   }
   if(username=="")
   {
    this.tservice.Warning('Please enter Employee Id')
   }
   else if(password==""){
    this.tservice.Warning('Please enter Password')
   }


   else if(this.userData.data[this.n] == undefined){
this.tservice.Error("Wrong Id/Password");
 }
   
 else if(this.rolex[0]==undefined){
  this.tservice.Error('You have not been mapped to any role yet');
 }
 else if(this.rolex[0]!=undefined && this.r==0){
  this.tservice.Error('As per records,you have not been assigned to this role');
}
  

  }
   }