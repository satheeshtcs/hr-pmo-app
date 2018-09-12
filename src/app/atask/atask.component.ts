import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Http,Response } from '../../../node_modules/@angular/http';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { DataService } from '../data.service';

@Component({
  selector: 'app-atask',
  templateUrl: './atask.component.html',
  styleUrls: ['./atask.component.css']
})
export class AtaskComponent implements OnInit {
userData:any={};
userData1:any={};
userData2:any={};
tag : any={};
emp_id:number;
userData3:any={};
taskObj1:any={};
private x:number;
private y:string;
j=0;
mnth:any=["January","February","March","April","May","June","July","August","September","October","November","December"]
  constructor(private user:UserService,private datas : DataService,private http:Http,private sessiont:SessionStorageService) { }

  ngOnInit() {
    
    this.emp_id= this.sessiont.retrieve("username")
    this.user.getTaskMembers().subscribe(data => this.userData1 = data);
    this.user.getUserRoleMap().subscribe(data => this.userData2 = data);
    this.user.getTag().subscribe(data=> this.tag=data);

    this.y="adm";
    this.x=this.datas.gettask();
  
     
     
     
   
    
  }
  assignTask = function(i){
    
    
    
    this.taskObj ={
   "task_id":  this.x,
   "emp_id" : this.userData2.data[i].emp_id,
  
   }
   window.alert('New Task Assigned'); 
    this.http.post("http://localhost:8080/assigntask", this.taskObj).subscribe((res:Response) => {
         
     })
     for(this.j=0;this.j<12;this.j++){
     this.taskObj1 ={
      "task_id":  this.x,
      "emp_id" : this.userData2.data[i].emp_id,
      "month" : this.mnth[this.j]
     
      }
      
       this.http.post("http://localhost:8080/tcapture1", this.taskObj1).subscribe((res:Response) => {
            
        })
      }
     
   }
   
}