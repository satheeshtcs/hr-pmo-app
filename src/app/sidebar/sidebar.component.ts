import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
view(){
  this.router.navigate(['dashboard/user'])
}
addu(){
  this.router.navigate(['dashboard/adduser'])
}
endu(){
  this.router.navigate(['dashboard/userrole'])
}
addu1(){
  this.router.navigate(['dashboard/enterrole'])
}
rolem(){
  this.router.navigate(['dashboard/rolemap'])
}
edu(){
  this.router.navigate(['editdeluser'])
}
viewu(){
  this.router.navigate(['viewuserrole'])
}
asst(){
  this.router.navigate(['associatetagging'])
}
}
