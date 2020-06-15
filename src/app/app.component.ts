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
  common: string;
 
  assignName (commonName: string) {
    this.common = commonName;
    console.log("value received: " + commonName);
    this.common = this.common[0].toUpperCase() + this.common.slice(1);
    console.log("value changed: " + this.common);
    this.http
    .get("https://api.covid19api.com/summary")
    .subscribe((value:any) => {
      this.globaldata = value.Global;
      this.countrydata = value.Countries;
      
      console.log("commonfunc" +this.common);
      this.countrydata.forEach(countrylist => {
        
        if (countrylist.CountryCode == this.common || countrylist.Country == this.common) {
          console.log("inside" + this.common);
          this.singledata = countrylist;
          console.log(this.singledata); 
         }
        else {
          
        }
      });
      
    });
  }
  
  constructor(public http: HttpClient) {
    // this.http
    // .get("https://api.covid19api.com/summary")
    // .subscribe((value:any) => {
    //   this.globaldata = value.Global;
    //   this.countrydata = value.Countries;
      
    //   console.log("commoncons" +this.common);
    //   this.countrydata.forEach(countrylist => {
        
    //     if (countrylist.CountryCode == "IN") {
          
    //       this.singledata = countrylist;
    //     }
    //   });
      
    // });
  }
  title = 'covid';
}
