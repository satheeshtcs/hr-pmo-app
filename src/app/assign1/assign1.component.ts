import { Component, OnInit } from '@angular/core';

import { SessionStorageService } from '../../../node_modules/ngx-webstorage';

import { UserService } from '../user.service';

import { Router } from '../../../node_modules/@angular/router';

import { Http, Response,Headers } from '@angular/http';
import { DataService } from '../data.service';



@Component({

selector: 'app-assign1',

templateUrl: './assign1.component.html',

styleUrls: ['./assign1.component.css']

})

export class Assign1Component implements OnInit {
private r:number;
first_name:string;

last_name:string;

taskmembers: any ={};

taskmembers1: any ={};

tasks: any={};
task: string;

emp_id :number;
n=0;

k=0;

l=0;

m=0;

p=0;

constructor( private sessionst: SessionStorageService, private datas: DataService,private http: Http,private taskMembers: UserService,private router:Router) { }



ngOnInit() {

this.first_name= this.sessionst.retrieve("first_name");

this.last_name=this.sessionst.retrieve("last_name");

this.taskMembers. getTaskData().subscribe(data=> this.taskmembers =data );


this.emp_id=this.sessionst.retrieve("username");



}

assign = function(i){
  
  
  
  this.r=this.taskmembers.data[i].task_id;
  this.datas.settask(this.r); 
  this.router.navigate(['atask']);
 
 

}  

Details(i){

this.router.navigate(['tdetails']);

this.sessionst.store("task",this.taskmembers.data[i].task_name);

this.sessionst.store("task_id",this.taskmembers.data[i].task_id);



}








}