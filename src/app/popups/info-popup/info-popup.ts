import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'info-popup',
  templateUrl: './info-popup.html',
  styleUrls: ['./info-popup.scss']
})
export class InfoPopupComponent {

  test;

  constructor(public location: Location, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.test = this.route.snapshot.queryParams;
    console.log('test', this.test);
  }

  close(){
    this.location.back();
  }
}
