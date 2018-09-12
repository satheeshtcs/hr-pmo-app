import { Component, OnInit } from '@angular/core';
import { Hy } from '../models/hy.module';
import { Http } from '../../../node_modules/@angular/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hy',
  templateUrl: './hy.component.html',
  styleUrls: ['./hy.component.css']
})
export class HyComponent implements OnInit {
  hy: Hy ={
    cemp_id:null,
    pemp_id:null
  };
  userData : any={};
  roleData : any={};
  constructor(private http:Http,private router:Router, private userListing :UserService,private rolemapList:UserService) { }

  ngOnInit()
  {  
   
    this.userListing.getUserData().subscribe(data => this.userData=data );
    this.rolemapList.getUserRoleMap().subscribe(data => this.roleData = data);
  }
  saveUser= function(user){
    this.userObj={
   "parent_id":user.pemp_id,
   "child_id": user.cemp_id
    }
    console.log(this.roleData)
    this.http.post("http://localhost:8080/ahy", this.userObj).subscribe((res:Response) => {})
  }
}