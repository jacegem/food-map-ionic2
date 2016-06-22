import {Page, NavController, NavParams} from 'ionic-angular';
import {BambooWritePage} from '../bamboo-write/bamboo-write';
/*
  Generated class for the BambooSubPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/bamboo-sub/bamboo-sub.html',
})
export class BambooSubPage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.parent = this.navParams.get('parent');
    this.database = this.navParams.get('db');
    this.path = this.navParams.get('path');
    this.bamboos = [];

    this.database.ref(this.path).orderByChild('parent').equalTo(this.parent.uid).on('child_added',
      (snapshot) => {
        this.addBamboos(snapshot);        
      });
  }

  add() {
    this.nav.push(BambooWritePage, { parent: this.parent, db: this.database, path: this.path });
  }

  addBamboos(snapshot) {
    debugger;
    var item = snapshot.val();
    this.bamboos.unshift(item);
  }

  viewBamboo(parent) {
    this.nav.push(BambooSubPage, { parent: parent, db: this.database, path: this.path });
  }
}
