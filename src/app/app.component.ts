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
  fnm;
  fad;
  fid;
  updBtn=false;
  constructor(private myservice:MyserviceService){
    this.myservice.viewdata();
    //console.log(this.d);
  }
  onClickReg(data){

    if(this.updBtn){
      let user={
        nm:data.nm,
        ad:data.ad,
        id:data.fid
      };
      this.myservice.updateData(user).subscribe((res)=>{
        alert(res['result']);
        console.log(res);
        this.updBtn=false;
        this.myservice.viewdata();
      });
    }else {
      let user={
        nm:data.nm,
        ad:data.ad
      };
      this.fnm="";
      this.fad="";
      this.myservice.adddata(user);
    }
    this.fnm="";
    this.fad="";
    this.fid="";
  }
  select(){
    this.myservice.viewdata();
  }
  onDeleteclk(val){
    console.log(val);
    let user={
      id:val
    };
    this.myservice.deleteData(user);
  }
  onUpdateClk(val){
    console.log(val);
    let user={
      id:val
    };
    this.myservice.updateDataclk(user).subscribe((res)=>{
      console.log(res);
      this.fnm=res['nm'];
      this.fad=res['ad'];
      this.fid=res['id'];
      this.updBtn=true;

    });

  }
  cancleUpdate(){
    this.updBtn=false;
    this.fnm="";
    this.fad="";
  }

}
