import {Component} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'info-popup',
  templateUrl: './info-popup.html',
  styleUrls: ['./info-popup.scss']
})
export class InfoPopupComponent {

  blog;

  constructor(public location: Location,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.blog = this.route.snapshot.queryParams;
  }

  close(){
    this.location.back();
  }
}
