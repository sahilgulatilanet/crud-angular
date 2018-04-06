import { Component } from '@angular/core';
import {MyserviceService} from "./myservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRud App';
  d;
  constructor(private myservice:MyserviceService){
    this.myservice.viewdata().subscribe((res)=>{
      console.log(res);
      this.d=res;
    });
    //console.log(this.d);
  }
  onClickReg(data){
    let user={
      nm:data.nm,
      ad:data.ad
    }
    this.myservice.adddata(user);
  }
}
