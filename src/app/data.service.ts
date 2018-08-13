import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private i: number;
  private user: {};
  private userRole:{};
  constructor() {
    this.i = 0;

   }

   public setIndexObj(val: number) {
    this.i = val;
}

public getIndexObj(): number {
    return this.i;
}
public setUser(val: object) {
  this.user = val;
}
public getUser(): object {
  return this.user;
}
public setUserRole(val: object) {
  this.userRole = val;
}
public getUserRole(): object {
  return this.userRole;
}
}
