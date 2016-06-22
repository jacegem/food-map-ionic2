import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Firebase provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Firebase {
  static get parameters() {
    return [[Http]]
  }

  constructor(http) {
    this.http = http;
    this.data = null;

    // this._ngZone.runOutsideAngular(() => {
    //   this._increaseProgress(() => {
    //     // reenter the Angular zone and display done
    //     this._ngZone.run(() => { console.log('Outside Done!') });
    //   }}));



    // var token = {
    //   "provider": "anonymous",
    //   "uid": "3c4e577c-d713-4561-b903-07c012f78a80"
    // };    
    //  debugger;
    if (firebase.apps.length > 0) {
      this.fb = firebase;
    } else {
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyAFb6L3F0YMW0XJl6NdZGP7wtoWfa5naPY",
        authDomain: "myfirstapp-bcfdc.firebaseapp.com",
        databaseURL: "https://myfirstapp-bcfdc.firebaseio.com",
        storageBucket: "myfirstapp-bcfdc.appspot.com",
      };
      this.fb = firebase.initializeApp(config);
    }
    this.database = this.fb.database();



    // this.database.ref(this.path).on('child_added', (snapshot) => {
    //   this.addBamboo(snapshot);
    // });


    // this.fb.auth(token).signInAnonymously().then((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log("#E# " + errorCode + ":" + errorMessage);
    //   this.database = this.fb.database();
    //   this.database.ref('test/' + 'sth1').set({
    //     username: 'name12',
    //     email: 'email12'
    //   });
    // });

  }

  getDatabase() {
    return this.database;
  }

  write(text) {
    this.database.ref('test/' + 'sth2').set({
      username: 'name12',
      email: 'email12',
      text: text
    });
  }

  call() {
    console.log("log" + this.fb);
  }
  getData(path, type) {

  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('path/to/data.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }
}

