import {Page} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {
  constructor() {
    this.items=[];
    this.key;
    this.val;    

    //this.msg = '';

    // this.myDataRef.on('child_added',
    //   (snapshot) => {
    //     debugger;
    //     var msg = snapshot.val();
    //     //this.displayMsg(msg.name);
    //     this.msg = msg.name;
    //   }
    // )
    

  }


  displayMsg(msg) {
    this.msg = msg;
  }


  makeGetRequest() {
    this.http.get("https://httpbin.org/ip")
      .subscribe(data => {
        debugger;
        var alert = Alert.create({
          title: "Your IP Address",
          subTitle: data.json().origin,
          buttons: ["close"]
        });
        this.nav.present(alert);
      }, error => {
        console.log(JSON.stringify(error.json()));
      });

    var url = "http://www.ppomppu.co.kr/zboard/zboard.php?id=ppomppu4";
    this.http.get(url).subscribe(data => {
      debugger;
      console.log("DATA" + data);
    });
  }

  makePostRequest() {
    this.http.post("https://httpbin.org/post", "firstname=Nic")
      .subscribe(data => {
        debugger;
        var alert = Alert.create({
          title: "Data String",
          subTitle: data.json().data,
          buttons: ["close"]
        });
        this.nav.present(alert);
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }


}
