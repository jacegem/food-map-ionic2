import {Page, NavController, Platform} from 'ionic-angular';
import {NgZone} from 'angular2/core';

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
    return [[NavController], [Platform], [NgZone]];
  }

  constructor(nav, platform, ngZone) {
    this.nav = nav;
    this.platform = platform;
    this.ngZone = ngZone;

    this.initMap();
  }

  initMap() {
    this.platform.ready().then(() => {
      var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
      };
      var map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
    });

  }
}
