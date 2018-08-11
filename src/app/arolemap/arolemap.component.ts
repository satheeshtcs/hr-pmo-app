import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from '../models/role.module';
import { Http } from '@angular/http';
import { Router } from '../../../node_modules/@angular/router';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { UserService } from '../user.service';

@Component({
  selector: 'app-arolemap',
  templateUrl: './arolemap.component.html',
  styleUrls: ['./arolemap.component.css']
})
export class ArolemapComponent implements OnInit {

  userData: any={};
  userData2 : any = {};
  userData1: any={};
   a: any;

  user: Role ={
    emp_id: null,
    role_name: null
    
  };


  constructor(private http: Http,private router:Router,private sessionst: SessionStorageService , private userListing :UserService) 
 { }

  ngOnInit() {
    this.userListing.getUserData().subscribe(data => this.userData=data );
    this.userListing.getUserRoleMap().subscribe(data => this.userData1=data );
    this.userListing.getUserRole().subscribe(data => this.userData2 = data);

  }
  n=0;
  saveUser = function(user){
    this.n=0;
    
    
    while(this.userData2.data[this.n] != undefined){
    if(user.role_name == this.userData2.data[this.n].role_name){
     this.a= this.userData2.data[this.n].role_code;

      console.log(this.n)
    }
    this.n++;
    }
    this.userObj = {
      "emp_id" : user.emp_id,
       "role_code" : this.a

    }
    console.log(this.a)
    this.http.post("http://localhost:8080/rolemapa", this.userObj).subscribe((res:Response) => {
      
      window.alert('New user has been added');
    })
  }
  Cancel(){
    this.router.navigate(['dashboard/rolemap'])

  }

}

