import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
detail;
user
constructor(public NavCtrl: NavController,public navParams: NavParams) {
  this.user = this.navParams.get('user');
  console.log(this.user);
  this.detail = this.navParams.get('detail');

  console.log(this.detail);
}

}
