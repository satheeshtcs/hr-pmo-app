import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.module';
import { UserService } from '../user.service';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { Http } from '../../../node_modules/@angular/http';
import { Router } from '../../../node_modules/@angular/router';
import { Toaster2Service } from '../toaster2.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private first_name: string;
  private last_name: string;
  private email1: string;
  private phone_no :number;
  private gender1: string;
  private emp_id: number;
  rolec:any;
  userData:any={};
  user: User ={
    user_id: null,
    first_name: null,
    last_name: null,
    emp_id: null,
    password: null,
    rpassword: null,
    contactPreference: null,
    
    gender: null,
    isActive: null,
    phoneNumber: null,
    email: '',
  };

  constructor(private userDataList: UserService,private sessionst:SessionStorageService,private http:Http,private router:Router,private tser:Toaster2Service) { }

  ngOnInit() {
    this.emp_id=this.sessionst.retrieve('username')
    this.userDataList.getUserData().subscribe(data=> this.userData=data);
    this.rolec=this.sessionst.retrieve("role");

  }
updateUserP = function(user){
  this.profObj= {
    "emp_id" : this.sessionst.retrieve("username"),
    "first_name" :user.first_name ,
    "last_name" : user.last_name ,
    "phone_no" : user.phoneNumber,
    "Email" : user.email,
    "Gender" : user.gender,
    "modified_by" : this.sessionst.retrieve("username")
  }
  this.http.put("http://localhost:8080/updateprofile", this.profObj).subscribe((res:Response) => {
   
    
    
    if(this.rolec=="asso"){
      this.router.navigate(['associate']);
    }
    if(this.rolec=="adm"){

      this.router.navigate(['admin']);
    }
    if(this.rolec=="head"){
      this.router.navigate(['head']);
    }
    if(this.rolec=="lead"){
      this.router.navigate(['lead']);
    }

  })
  this.tser.Success('Profile updated succesfully'); 
  
}
}
