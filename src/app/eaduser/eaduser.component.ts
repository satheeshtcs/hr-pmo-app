import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { Http } from '../../../node_modules/@angular/http';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';

@Component({
  selector: 'app-eaduser',
  templateUrl: './eaduser.component.html',
  styleUrls: ['./eaduser.component.css']
})
export class EaduserComponent implements OnInit {
  userDataListing	: any = {};
  constructor(private userDataList: UserService,private dataService : DataService,private http: Http,private sessionst:SessionStorageService) { }
n=0;
  ngOnInit() {
    this.userDataList.getUserData().subscribe(data => this.userDataListing = data);

  }
  getIndex(i){
  
    this.n=i;
    console.log(this.n);
    this.dataService.setIndexObj( this.n);
    this.dataService.setUser( this.userDataListing.data[i]);
    this.sessionst.store("user",this.userDataListing.data[i]);
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
