import {App, IonicApp, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {GettingStartedPage} from './pages/getting-started/getting-started';
import {ListPage} from './pages/list/list';
import {BambooPage} from './pages/bamboo/bamboo';
import {ShopOverseasPage} from './pages/shop-overseas/shop-overseas';
import {SampleMapPage} from './pages/sample-map/sample-map';

@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  static get parameters() {
    return [[IonicApp], [Platform]];
  }

  constructor(app, platform) {
    this.app = app;
    this.platform = platform;

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '샘플 맵', component: SampleMapPage },
      { title: '해외구매', component: ShopOverseasPage },
      { title: 'Bamboo', component: BambooPage },
      { title: 'Getting Started', component: GettingStartedPage },
      { title: 'List', component: ListPage }
    ];

    //this.rootPage = ShopOverseasPage;
    this.rootPage = ShopOverseasPage;

    this.addAdMob();
  }

  addAdMob() {
    this.platform.ready().then(() => {
      if (/(android)/i.test(navigator.userAgent)) {
        // var admobid = { // for Android
        //     banner: 'ca-app-pub-3129126307582044/9943917413'
        // };
        if (AdMob) {
          AdMob.createBanner(
            {
              adId: 'ca-app-pub-3129126307582044/9943917413',
              position: AdMob.AD_POSITION.BOTTOM_CENTER,
              autoShow: true
            }
          );
        }
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  getFirebase() {
    return 'fb';
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}

