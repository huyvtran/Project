import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { NodeapiProvider } from '../../providers/nodeapi/nodeapi';
/**
 * Generated class for the SelectabdominalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selectabdominal',
  templateUrl: 'selectabdominal.html',
})
export class SelectabdominalPage {

  public damList:Array<any>;
  public loadeddamList:Array<any>;
  public damRef:firebase.database.Reference;
  user:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private api:NodeapiProvider) {
    this.user=this.navParams.get('user');

    this.api.getAllCattle(this.user).subscribe(data=>{
      let dam = [];
      var values = Object.keys(data).map(key=>data[key]);
      values.forEach(snap=>{
        if(snap.sexct=="เพศเมีย"&&snap.status=='ผสมพันธุ์แล้ว'){
          dam.push(snap);
       }
      })
      this.damList = dam;
      this.loadeddamList = dam;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectabdominalPage');
  }
  initializeItems(): void {
    this.damList = this.loadeddamList;
  }
  getItems(searchbar) {
  // Reset items back to all of the items
  this.initializeItems();

  // set q to the value of the searchbar
  var q = searchbar.srcElement.value;

  // if the value is an empty string don't filter the items
  if (!q) {
    return;
  }

  this.damList = this.damList.filter((v) => {
    if(v.id && q) {
      if (v.id.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });
  console.log(q, this.damList.length);
  }
  abd(k){
    this.navCtrl.push('AbdominalPage',{user:this.user,id:k})
  }


}
