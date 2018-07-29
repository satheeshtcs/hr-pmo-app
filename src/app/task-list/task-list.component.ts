import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { DataService } from '../data.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskDataListing	: any = {};
  constructor(private taskDataList: TaskService,private dataService : DataService,private http: Http) { }
n=0;
  ngOnInit() {
    this.taskDataList.getTaskData().subscribe(data => this.taskDataListing = data);

  }
  getIndex(i){
  
    this.n=i;
    console.log(this.n);
    this.dataService.setIndexObj( this.n);
  }
  deleteTask = function(i){
  
    this.n=this.taskDataListing.data[i].task_id
    console.log(this.n);
    if(window.confirm("Are you sure to delete ")) {
      
      const url = `${"http://localhost:8080/taskdel1"}/${this.n}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
        this.taskDataList.getTaskData().subscribe(data => this.taskDataListing = data);
      })
    }
  }
  
}
