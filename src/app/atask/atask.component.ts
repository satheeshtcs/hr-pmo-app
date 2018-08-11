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
userData3:any={};
taskObj1:any={};
private x:number;
private y:string;
  constructor(private user:UserService,private datas : DataService,private http:Http,private sessiont:SessionStorageService) { }

  ngOnInit() {
    this.user.getTaskassign().subscribe(data => this.userData = data);
    
    
    this.user.getTaskMembers().subscribe(data => this.userData1 = data);
    this.user.getAtask().subscribe(data => this.userData2 = data);
    this.y="adm";
    this.x=this.datas.gettask();
    this.taskObj1 ={
      "task_id":  this.x,
      
     
      }
     
    this.userData3=this.http.get("http://localhost:8080/assigntask",this.taskObj1).map((res:Response) => res.json()); 
     
     
   
    
  }
  assignTask = function(i){
    console.log(this.userData3)
    
    
    this.taskObj ={
   "task_id":  this.x,
   "emp_id" : this.userData2.data[i].emp_id,
  
   }
   window.alert('New Task Assigned'); 
    this.http.post("http://localhost:8080/assigntask", this.taskObj).subscribe((res:Response) => {
         
     })
     
   }
   
}
