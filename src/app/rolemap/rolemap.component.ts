import { Component, OnInit , Output,EventEmitter } from '@angular/core';
import { SampleService } from '../services/sample-service';
import { Http, Response,Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise'
@Component({
  selector: 'app-rolemap',
  templateUrl: './rolemap.component.html',
  styleUrls: ['./rolemap.component.css']
})
export class RolemapComponent implements OnInit {
  @Output() timeEvent = new EventEmitter();
  n=0;
  time:number=10;
private appUrl = 'http://localhost:8080/rolemap';
roleData : any = {};
  constructor(private ServiceRole: SampleService,private http: Http) { }
emp_id:number;


private headers = new Headers({ 'Content-Type': 'application/json'});

  ngOnInit() {
    this.ServiceRole.getListData123b().subscribe(data => this.roleData = data);
    this.timeEvent.emit(this.time)
  
  }
  
  getIndex(i){
    this.n = i;
    
    console.log(this.n);
  }

  deleteUser = function(i){
  
    this.n=this.roleData.data[i].role_id
    console.log(this.n);
    if(window.confirm("Are you sure to delete ")) {
      
      const url = `${"http://localhost:8080/userdel3"}/${this.n}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
        this.ServiceRole.getListData123b().subscribe(data => this.roleData = data);
      })
    }
  }

}
