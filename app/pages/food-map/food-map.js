import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the FoodMapPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/food-map/food-map.html',
})
export class FoodMapPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
