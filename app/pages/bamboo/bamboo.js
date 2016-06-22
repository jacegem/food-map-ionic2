import {Page, NavController} from 'ionic-angular';
import {BambooWritePage} from '../bamboo-write/bamboo-write';
import {BambooSubPage} from '../bamboo-sub/bamboo-sub';
import {Firebase} from '../../providers/firebase/firebase';
//import {SortK} from '../../pipes/sort';

//import {FirebaseRef} from 'angularfire2';
/*
  Generated class for the BambooPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/bamboo/bamboo.html'
  , providers: [Firebase]
  // , pipes: [SortK]
})
export class BambooPage {

  static get parameters() {
    return [[NavController], [Firebase]];
  }

  constructor(nav, fb) {
    this.nav = nav;

    //this.firebase = new Firebase("https://sweltering-heat-9516.firebaseio.com/2016/bamboo/root");
    this.text = "Say Anything";
    this.parent = {};
    this.parent.uid = 'root';
    this.bamboos = [];
    
    
    this.database = fb.getDatabase();
    this.path = 'test/sub';
    this.database.ref(this.path).on('child_added', (snapshot) => {
      this.addBamboo(snapshot);
    });
    //this.fb = firebase.intializeApp(config);
    // console.log(config);
    // this.fb = firebase.intializeApp(config);


    //this.myDataRef = new Firebase("https://sweltering-heat-9516.firebaseio.com/2016/bamboo/");
    // //this.bookItems = af.list('');
    // //this.myDataRef = ref;
    // //데이터를 가져온다.
    // this.firebase.once('value',
    //   (snapshot) => {
    //     console.log(snapshot.val());
    //     var items = snapshot.val();
    //     for (var key in items) {
    //       this.bamboos.push(items[key]);
    //     }
    //   }, error => console.log(error.code)
    //   , () => console.log('read complete')
    // )

    //debugger;
    //this.text = this.app.getFirebase();



    // this.database.ref(this.path).once('value',
    //   (snapshot) => {
    //     debugger;
    //     this.addBambooList(snapshot);
    //   }, error => console.log(error.code)
    //   , () => { debugger; console.log('read complete') }
    // )
  }

  addBambooList(snapshot) {
    console.log(snapshot.val());
    debugger;
    var items = snapshot.val();
    for (var key in items) {
      this.bamboos.push(items[key]);
    }
  }

  addBamboo(snapshot) {
    var item = snapshot.val();
    console.log("item" + item);
    this.bamboos.unshift(item);
    //this.bamboos.push(item);
    this.subcount = this.bamboos.length;
  }

  viewBamboo(parent) {
    this.nav.push(BambooSubPage, { parent: parent, db: this.database, path: this.path });
  }

  eventHandler(event) {
    return;
    // console.log(event, event.keyCode, event.keyIdentifier);    
    // var element = document.getElementById("TextArea");    
    // element.style.height = element.scrollHeight + "px";
    // debugger;

  }

  add() {
    let parent = {
      uid: this.parent.uid,
      text: this.text
    }
    this.nav.push(BambooWritePage, { parent: parent, db: this.database, path: this.path });
  }
}
