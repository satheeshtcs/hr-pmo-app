import { Component, OnInit } from '@angular/core';
import { SampleService } from '../services/sample-service';
import { Http } from '../../../node_modules/@angular/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {

  sampleDataListing	: any = {};
  constructor(private SampleServiceList: SampleService,private http: Http,private dataService : DataService) { }
  private n: number = 0;
  
  ngOnInit() {
    this.SampleServiceList.getListData123a().subscribe(data => this.sampleDataListing = data);
    
  }
  deleteUser = function(i){
  
    this.n=this.sampleDataListing.data[i].role_id
    console.log(this.n);
    if(window.confirm("Are you sure to delete ")) {
      
      const url = `${"http://localhost:8080/userdel2"}/${this.n}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
        this.SampleServiceList.getListData123a().subscribe(data => this.sampleDataListing = data);
      })
    }
  }
  getIndex(i){
  
    this.n=i;
    console.log(this.n);
    this.dataService.setIndexObj( this.n);
  }
}
