import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'al-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']


})
export class PageNotFoundComponent {

  constructor(private location: Location) { }
  
  back() {
    this.location.back();
  }
}
