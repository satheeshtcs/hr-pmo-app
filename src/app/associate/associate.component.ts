import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { UserService } from '../user.service';
import { Router } from '../../../node_modules/@angular/router';
import { tdetails } from '../models/tdetail.module';
import { tdetails2 } from '../models/tdetail2.module';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent implements OnInit {
first_name:string;
last_name:string;
taskmembers: any ={};
tasks: any={};
emp_id :number;
n=0;
k=0;
l=0;
m=0;
mnth:any=["January","February","March","April","May","June","July","August","September","October","November","December"]

userData:any={}
p=0;
tdetail : tdetails ={
  month: "January",
  val:[null]
}
tdetail2 : tdetails2 ={
  smonth: "January",
  emonth: "January"
}
  constructor( private sessionst: SessionStorageService,private taskMembers: UserService,private router:Router) { }

  ngOnInit() {
    this.taskMembers.getUserData().subscribe(data => this.userData=data);

    this.emp_id= this.sessionst.retrieve("username");

   this.taskMembers.getTaskMembers().subscribe(data=> this.taskmembers =data );
   this.emp_id=this.sessionst.retrieve("username");
  }

  Details(i){
    this.router.navigate(['tdetails']);
    this.sessionst.store("task",this.taskmembers.data[i].task_name);
    this.sessionst.store("task_id",this.taskmembers.data[i].task_id);

  }

  count(i){
this.k=0;
this.m=0;
this.n=0;
    this.p=i;
    this.l=1;
    while(this.taskmembers.data[this.k]!=undefined){
if(this.taskmembers.data[this.k].task_id == this.taskmembers.data[i].task_id){
  this.n++;
if(this.taskmembers.data[this.k].task_status==1){
  this.m++;
}
}
this.k++;
    }
  }


}
