import { Component, OnInit } from '@angular/core';
import { SampleService } from '../services/sample-service';
import { UserComponent } from '../user/user.component';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
import {ActivatedRoute } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { User } from '../models/user.module';
import { UserService } from '../user.service';
import { delay } from '../../../node_modules/@types/q';
import { SessionStorageService } from '../../../node_modules/ngx-webstorage';
import { Message } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';
import { Hy } from '../models/hy.module';

@Component({
  selector: 'app-htedit',
  templateUrl: './htedit.component.html',
  styleUrls: ['./htedit.component.css']
})
export class HteditComponent implements OnInit {
  
  private n:number=0;
  data:object = {};
 sampleDataListing	: any = {};
 userData : any = {};
 userData2 : any = {};
users:any = {};
 first_names : string;
 p=0;
 user
 
 
 
constructor(private userDataList: UserService , private dataService:DataService,private http: Http,private router:Router,private sessionst: SessionStorageService ) { }
ngOnInit(){
  
  this.n=this.dataService.getIndexObj();
  this.userDataList.getUserData().subscribe(data =>  this.userData = data);
  this.userDataList.getUsertag().subscribe(data =>  this.userData2 = data);
this.users=this.sessionst.retrieve("user")

}

Hy: Hy ={

  cemp_id: null,
  pemp_id: null,
  
};

updateUser = function(Hy){
 
  this.userObj = {
      "cemp_id" : Hy.cemp_id,
      "pemp_id" :Hy.pemp_id ,
      
  }
   
  
    this.http.put("http://localhost:8080/edithierarchy", this.userObj).subscribe((res:Response) => {
      this.router.navigate(['htdetails'])
      window.alert('Updation Successful');
  })




}
Cancel(){
  this.router.navigate(['editdeluser'])
}

}
