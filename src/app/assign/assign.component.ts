import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { Http, Response, Headers } from '@angular/http';
@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
  userData	: any = {};
  userData1	: any = {};
  public data:any=[];
  private y:string;
  private z:number;
  constructor( private router:Router,private user:UserService,private http: Http,private datas:DataService) { 
   
  }

  ngOnInit() {
    this.user.getRoleMap().subscribe(data => this.userData = data);
    this.z=this.datas.getassignObj();
    this.y="asso";
  }

 
    assignTask = function(i){
      this.taskObj ={
     "task_id":  this.z,
     "emp_id" : this.userData.data[i].emp_id
     
     }
      console.log(this.z);
      this.router.navigate(['assigned'])
      this.http.post("http://localhost:8080/assigntask", this.taskObj).subscribe((res:Response) => {
           
       })
       
     }
  }


