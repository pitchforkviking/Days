import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AgoPage } from '../ago/ago';
import { AddPage } from '../add/add';
import { AwayPage } from '../away/away';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AwayPage;
  tab3Root: any = AgoPage;
  tab4Root: any = SettingsPage;
  constructor(public navCtrl: NavController) {
  }
  goToAgo(params){
    if (!params) params = {};
    this.navCtrl.push(AgoPage);
  }
  
  goToAdd(params){
    if (!params) params = {};
    this.navCtrl.push(AddPage);
  }
  
  goToAway(params){
    if (!params) params = {};
    this.navCtrl.push(AwayPage);
  }
}
