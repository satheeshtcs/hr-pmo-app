import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { User } from '../models/user.module';

import { Form } from '../form'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { ToasterService } from '../toaster.service';
import { Toaster2Service } from '../toaster2.service';

@Component({
  selector: 'app-changep',
  templateUrl: './changep.component.html',
  styleUrls: ['./changep.component.css']
})

export class ChangepComponent implements OnInit {
  rForm: FormGroup; 
  i=0;   
  pass:any;               
  password:string = '';
  userData	: any = {};
  user: User={
    user_id: null,
    first_name: null,
    last_name: null,
    emp_id: null,
    password: null,
    contactPreference: null,
    rpassword:null,
    gender: null,
    isActive: null,
    phoneNumber: null,
    email: '',
  };
  constructor(private userDataList: UserService,private tservice:Toaster2Service, private router:Router,private fb: FormBuilder,private sessionst:SessionStorageService) {this.rForm = fb.group({
    'password':  [null, Validators.required],
    'validate' : ''
  }); }

  ngOnInit() {
    this.userDataList.getUserData().subscribe(data => this.userData = data);

}
checkP(e){
     var password = btoa(this.user.password);
     while(this.userData.data[this.i]!=undefined){
if(this.sessionst.retrieve("username")==this.userData.data[this.i].emp_id){
  this.pass=this.userData.data[this.i].password;
}
this.i++;
     }
     
     if(this.pass == password){
        this.router.navigate(['updatep'])
     }
     else{
       this.tservice.Error('Wrong Password')
     }
     if(password=="")
   {
    this.tservice.Warning('Please enter old password')
   }
}


}
