import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';


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
  alert: boolean = true;
 
  assignName (commonName: string) {
    
    this.common = commonName;
    
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

      //this.countrydata.forEach(countrylist => {
        for (let countrylist of this.countrydata) {
        if (countrylist.CountryCode == this.common || countrylist.Country == this.common) {
          this.singledata = countrylist;
          this.alert = true;
          break;
         }
         else {
           this.alert = false;
         }
      };
      
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
        
      }
      for (let i = 94;i < 186;i++) {
        this.maindata.push(this.countrydata[i]);
        
      }
    });
    
  }
  title = 'covid';
}
