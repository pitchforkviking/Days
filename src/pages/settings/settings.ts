import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { SignInPage } from '../sign-in/sign-in';
import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import { SignUpPage } from '../sign-up/sign-up';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToWelcome(params){
    if (!params) params = {};
    this.navCtrl.push(WelcomePage);
  }
  
  goToSignIn(params){
    if (!params) params = {};
    this.navCtrl.push(SignInPage);
  }
  
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  
  goToAdd(params){
    if (!params) params = {};
    this.navCtrl.push(AddPage);
  }
  
  goToSignUp(params){
    if (!params) params = {};
    this.navCtrl.push(SignUpPage);
  }
}
