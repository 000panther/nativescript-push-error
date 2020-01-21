import * as _ from 'lodash';
import * as firebase from 'nativescript-plugin-firebase';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  serviceId = null;

  constructor () {
      this.serviceId = new Date().getTime();
      console.log('construct firebaseService ' + this.serviceId);
  }

  init() {
    firebase.init({
        // Optionally pass in properties for database, authentication and cloud messaging,
        // see their respective docs.
        showNotifications: true,
        showNotificationsWhenInForeground: true,
        onMessageReceivedCallback: (message) => {
            console.log('got message ' + this.serviceId);
            console.log(message);
        },
        onPushTokenReceivedCallback: (token) => {
            console.log("got token" + this.serviceId);
            console.log(token);
        }
    }).then( () => {
        console.log("firebase init success");
    }).catch((error) => {
        console.log("firebase init error: ", error);
    });
  };

  public addCallbackForNotificationService() {
    firebase.addOnMessageReceivedCallback(
        (message) => {
            console.log('got message ' + this.serviceId);
            console.log(message);
        },
    );
  }
}
