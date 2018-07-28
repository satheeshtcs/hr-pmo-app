import { Component, OnInit } from '@angular/core';
import { SampleService } from '../services/sample-service';
import { UserComponent } from '../user/user.component';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
import {ActivatedRoute } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { User } from '../models/user.module';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
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
  private n:number=0;
  data:object = {};
 sampleDataListing	: any = {};
 userData : any = {};
 p=0;
constructor(private userDataList: UserService , private dataService:DataService,private http: Http,private router:Router ) { }

ngOnInit() {
  this.n=this.dataService.getIndexObj();
  this.userDataList.getUserData().subscribe(data => this.userData = data);
  
  

}

updateUser = function(user){
 
  this.userObj = {
      "emp_id" : this.userData.data[this.n].emp_id,
      "first_name" :user.first_name ,
      "last_name" : user.last_name ,
      "phone_no" : user.phoneNumber,
      "Email" : user.email,
      "Gender" : user.gender

  }
   
  
    this.http.put("http://localhost:8080/updateuser", this.userObj).subscribe((res:Response) => {
      this.router.navigate(['userupdate'])
  })




}
}
