import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  
  goToAdd(params){
    if (!params) params = {};
    this.navCtrl.push(AddPage);
  }
}
