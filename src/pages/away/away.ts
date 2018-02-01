import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-away',
  templateUrl: 'away.html'
})
export class AwayPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
  goToAdd(params){
    if (!params) params = {};
    this.navCtrl.push(AddPage);
  }
}
