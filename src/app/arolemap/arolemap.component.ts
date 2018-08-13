import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from '../models/role.module';
import { Http } from '@angular/http';
import { Router } from '../../../node_modules/@angular/router';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { UserService } from '../user.service';
import { ToasterService } from '../toaster.service';
import { Toaster2Service } from '../toaster2.service';

@Component({
  selector: 'app-arolemap',
  templateUrl: './arolemap.component.html',
  styleUrls: ['./arolemap.component.css']
})
export class ArolemapComponent implements OnInit {

  userData: any={};
  userData2 : any = {};
  userData1: any={};
  userData3: any={}
  userData4: any={}
   a: any;
   userObj: any={}
   b=0

  user: Role ={
    emp_id: null,
    role_name: null
    
  };


  constructor(private http: Http,private router:Router,private tservice:Toaster2Service,private sessionst: SessionStorageService , private userListing :UserService) 
 { }

  ngOnInit() {
    this.userListing.getUserData().subscribe(data => this.userData=data );
    this.userListing.getUserRoleMap().subscribe(data => this.userData1=data );
    this.userListing.getUserRole().subscribe(data => this.userData2 = data);
    this.userListing.getUserRoleMap2().subscribe(data => this.userData3 = data);
    this.userListing.getUserRoleMap4().subscribe(data => this.userData4 = data);

  }
  n=0;
  saveUser = function(user){
    this.n=0;
    
    while(this.userData2.data[this.n] != undefined){
      if((user.emp_id == this.userData4.data[this.n].emp_id) && (user.role_name == this.userData4.data[this.n].role_name)){
        this.b=1;
        this.router.navigate(['arolemap'])
      }
      
    if(user.role_name == this.userData2.data[this.n].role_name){
     this.a= this.userData2.data[this.n].role_code;

      console.log(this.n)
    }
    this.n++;
    }
    if(this.b==0){

    

    this.userObj = {
      "emp_id" : user.emp_id,
       "role_code" : this.a

    }
    console.log(this.a)
    this.http.post("http://localhost:8080/rolemapa", this.userObj).subscribe((res:Response) => {
      
      window.alert('New user has been added');
    })
  
  }
  else {
    this.tservice.Warning('Please enter Password')
  } 
}
  Cancel(){
    this.router.navigate(['dashboard/rolemap'])

  }

}

