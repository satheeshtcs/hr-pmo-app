import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { Http } from '../../../node_modules/@angular/http';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-htdetails',
  templateUrl: './htdetails.component.html',
  styleUrls: ['./htdetails.component.css']
})
export class HtdetailsComponent implements OnInit {
  userDataListing	: any = {};
  emp_id :number;
  constructor(private userDataList: UserService,private dataService : DataService,private http: Http,private sessionst:SessionStorageService,private router:Router) { }
n=0;
  ngOnInit() {
    this.userDataList.getUsertag().subscribe(data => this.userDataListing = data);
    this.emp_id= this.sessionst.retrieve("username");
  }
  getIndex(i){
  
    this.n=i;
    console.log(this.n);
    this.dataService.setIndexObj( this.n);
    this.dataService.setUser( this.userDataListing.data[i]);
    this.sessionst.store("user",this.userDataListing.data[i]);
    this.router.navigate(['htedit'])
  }
  deleteUser = function(i){
  
    this.n=this.userDataListing.data[i].user_id
    console.log(this.n);
    
    if(window.confirm("Are you sure to delete ")) {
      
      
      const url = `${"http://localhost:8080/userdel1"}/${this.n}`;
      return this.http.delete(url, {headers: this.headers}).toPromise()
      .then(() => {
        this.userDataList.getUserData().subscribe(data => this.userDataListing = data);
      })
    }
  }
  
}
