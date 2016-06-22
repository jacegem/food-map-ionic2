import {Page, NavController, Platform} from 'ionic-angular';
import {NgZone} from 'angular2/core';
/*
  Generated class for the SampleMapPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
    templateUrl: 'build/pages/sample-map/sample-map.html',
})
export class SampleMapPage {
    static get parameters() {
        return [[NavController], [Platform], [NgZone]];
    }

    constructor(nav, platform, ngZone) {
        this.nav = nav;
        this.platform = platform;
        this.ngZone = ngZone;

        this.data = {};
        this.data.person = "";
        this.namesList = [
            { shortName: 'A' },
            { shortName: 'B' },
            { shortName: 'C' },
            { shortName: 'D' }
        ];

        this.admobId = {};

        debugger;

        //AdMob = AdMob || null;
        if (typeof (AdMob) != 'undefined') alert(AdMob);

        //alert(navigator.userAgent);

        this.initializeMap();

        //alert('start if');

        
    }

    // if(/(android)/i.test(navigator.userAgent)) {
    //     this.admobId = {
    //             banner: 'ca-app-pub-3129126307582044/9943917413',
    //             interstitial: 'ca-app-pub-3129126307582044/3908900216'
    //     };
    // } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
    //     this.admobId = {
    //             banner: 'ca-app-pub-3129126307582044/9943917413',
    //             interstitial: 'ca-app-pub-3129126307582044/3908900216'
    //     };
    // } else {
    //     this.admobId = {
    //             banner: 'ca-app-pub-3129126307582044/9943917413',
    //             interstitial: 'ca-app-pub-3129126307582044/3908900216'
    //     };
    // }

    //alert('start if');


    createBanner() {
        this.platform.ready().then(() => {
            debugger;
            if (AdMob) {
                AdMob.createBanner({
                    adId: admobId.banner,
                    autoShow: false
                });
            }
        });
    }

    showInterstitial() {
        this.platform.ready().then(() => {
            if (AdMob) {
                AdMob.prepareInterstitial({
                    adId: admobId.interstitial,
                    autoShow: true
                });
            }
        });
    }

    showBanner(position) {
        this.platform.ready().then(() => {
            if (AdMob) {
                var positionMap = {
                    "bottom": AdMob.AD_POSITION.BOTTOM_CENTER,
                    "top": AdMob.AD_POSITION.TOP_CENTER
                };
                AdMob.showBanner(positionMap[position.toLowerCase()]);
            }
        });
    }

    hideBanner(position) {
        this.platform.ready().then(() => {
            if (AdMob) {
                AdMob.hideBanner();
            }
        });
    }


    initializeMap() {
        var me = this;
        this.platform.ready().then(() => {
            var myLatlng = { lat: -25.363, lng: 131.044 };

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 4,
                center: myLatlng
            });

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Click to zoom'
            });

            // map.addListener('center_changed', function() {
            //   // 3 seconds after the center of the map has changed, pan back to the
            //   // marker.
            //   window.setTimeout(function() {
            //     map.panTo(marker.getPosition());
            //   }, 3000);
            // });

            marker.addListener('click', function () {
                debugger;
                console.log(marker.getPosition());
                //map.setZoom(8);
                //map.setCenter(marker.getPosition());
                var item = {
                    shortName: marker.getPosition() + " added at " + new Date()
                };

                me.ngZone.run(() => {
                    me.namesList.unshift(item);
                    console.log('click Done!')
                });
            });
        });
    }

    onChange(event) {
        console.log("change called:" + event);
        debugger;
        var item = {
            shortName: event + " added at " + new Date()
        };
        this.namesList.unshift(item);
    }
}
