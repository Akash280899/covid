import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnChanges {
  @Input() countrydata: any;
  constructor() { }

  ngOnChanges() {
    console.log(this.countrydata);
  }

}
