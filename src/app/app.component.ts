import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  t1: number;
  hasil = 0;
  i:number;
  temp : number[];
  input()
  {
    for(this.i=0; this.i<this.t1; this.i++){
      this.temp = [];
      this.hasil = this.i;
      this.temp.push(this.hasil);
    }
  }
}
