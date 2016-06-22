import {Page, NavController, NavParams} from 'ionic-angular';

/*
  Generated class for the BambooWritePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/bamboo-write/bamboo-write.html'
})
export class BambooWritePage {
  static get parameters() {
    return [[NavController], [NavParams]];
  }

  constructor(nav, navParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.parent = this.navParams.get('parent');
    this.database = this.navParams.get('db');
    this.path = this.navParams.get('path');
  }

  write() {
    var uid = this.database.ref().child(this.path).push().key;
    let d = new Date();
    let data = {
      parent: this.parent.uid,
      uid: uid,
      text: this.text,
      date: d.toISOString(),
      subcount: 0
    }
    this.database.ref(this.path + '/' + uid).set(data);

    this.database.ref(this.path).orderByChild('parent').equalTo(this.parent.uid).once('value',
      (snapshot) => {
        this.parent.subcount = this.parent.subcount | 0;
        this.parent.subcount += 1;
        this.database.ref(this.path + '/' + this.parent.uid).set(this.parent);
      });

    this.nav.pop();
    //debugger;
    // var postData = {
    //   username: 'name12',
    //   email: 'email12',
    //   text: this.text
    // }
    // var updates = {};
    // updates['posts/' + newPostKey] = postData;
    // updates['user-posts' + 'test' + '/' + newPostKey] = postData;
    // this.database.update(updates);
    // this.database.ref('test/' + 'sth2').set({      
    //   username: 'name12',
    //   email: 'email12',
    //   text: this.text
    // });
  }

  eventHandler(event) {
    return;
    // console.log(event, event.keyCode, event.keyIdentifier);    
    // var element = document.getElementById("TextArea");    
    // element.style.height = element.scrollHeight + "px";
    // debugger;

  }
}
