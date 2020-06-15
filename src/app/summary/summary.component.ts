import { Component,Input, OnChanges } from '@angular/core';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnChanges {
  @Input() globaldata: any;
  
  constructor() {
    console.log(this.globaldata);
  }

  ngOnChanges() {
    if(Object.keys(this.globaldata).length!=0) {
      console.log(this.globaldata);
    }
    
    
  }

}
