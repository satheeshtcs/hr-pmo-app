import { Component, OnInit } from '@angular/core';
import { Hy } from '../models/hy.module';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'app-hy',
  templateUrl: './hy.component.html',
  styleUrls: ['./hy.component.css']
})
export class HyComponent implements OnInit {
  hy: Hy ={
    cemp_id:null,
    pemp_id:null
  };
  constructor(private http:Http) { }

  ngOnInit() {
  }
  saveUser= function(user){
    this.userObj={
   "parent_id":user.pemp_id,
   "child_id": user.cemp_id
    }
    this.http.post("http://localhost:8080/ahy", this.userObj).subscribe((res:Response) => {})
  }
}
