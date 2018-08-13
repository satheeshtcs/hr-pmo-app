import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { User } from '../models/user.module';
import { Router } from '../../../node_modules/@angular/router';
import { Toaster2Service } from '../toaster2.service';

@Component({
  selector: 'app-updatep',
  templateUrl: './updatep.component.html',
  styleUrls: ['./updatep.component.css']
})
export class UpdatepComponent implements OnInit {
  rolec:any;
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
  constructor(private http: Http,private sessionst:SessionStorageService,private tservice:Toaster2Service, private router:Router) { }

  ngOnInit() {
this.rolec=this.sessionst.retrieve("role");
  }
changeP = function(user){
  this.userObj = {
    "emp_id" : this.sessionst.retrieve("username"),
    "password": btoa(this.user.password),
    "modified_by" : this.sessionst.retrieve("username")
  }
  if(user.password != user.rpassword){
   this.tservice.Error('Passwords Do Not Match')
  }
  else{
  this.http.put("http://localhost:8080/changepassword", this.userObj).subscribe((res:Response) => {
    this.tservice.Info('Password  has been changed successfully ')
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
  }

}
}
