import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  globaldata: any = {};
  countrydata: any = [];
  singledata: any = {};
  tempdata: any = [];
  maindata: any =[];
  common: string;
 
  assignName (commonName: string) {
    //console.log("mainsingle" + this.singledata);
    this.common = commonName;
    console.log("value received: " + commonName);
    this.common = this.common[0].toUpperCase() + this.common.slice(1);
    console.log("value changed: " + this.common);
    this.http
    .get("https://api.covid19api.com/summary")
    .subscribe((value:any) => {
      this.globaldata = value.Global;
      this.countrydata = value.Countries;

      console.log(this.countrydata);
      if(this.common.length == 2) {
        this.common  =this.common.toUpperCase( );
        
      }

      console.log("commonfunc" +this.common);
      this.countrydata.forEach(countrylist => {
        
        if (countrylist.CountryCode == this.common || countrylist.Country == this.common) {
          console.log("inside" + this.common);
          this.singledata = countrylist;
          console.log("singledata" + this.singledata); 
         }
        else {
          //this.alertService.error("Entetr");
          //err("enter");
        }
      });
    });
  }

  
  
  
  constructor(public http: HttpClient) {

    this.http
    .get("https://api.covid19api.com/summary")
    .subscribe((value:any) => {
      this.globaldata = value.Global;
      this.countrydata = value.Countries;


      for (let i = 0;i<=93;i++) {
        this.tempdata.push(this.countrydata[i]);
        //console.log("tempdata" + this.tempdata);
      }
      for (let i = 94;i < 186;i++) {
        this.maindata.push(this.countrydata[i]);
        //console.log("maindata" + this.maindata);
      }
    });
    
  }
  
  
  
  title = 'covid';
}
