import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private i: number;
  constructor() {
    this.i = 0;

   }

   public setIndexObj(val: number) {
    this.i = val;
}

public getIndexObj(): number {
    return this.i;
}
}
