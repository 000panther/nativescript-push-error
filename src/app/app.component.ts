import { Component, OnInit } from "@angular/core";
import { FirebaseService } from './firebase.service';

const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    constructor(private firebaseService: FirebaseService) {
        console.log("construct AppComponent");
    }

    ngOnInit() {
        this.firebaseService.init();
        // firebase
        //     .init({
        //         // Optionally pass in properties for database, authentication and cloud messaging,
        //         // see their respective docs.
        //         onMessageReceivedCallback: (message: Message) => {
        //             console.log(`Title: ${message.title}`);
        //             console.log(`Body: ${message.body}`);
        //             // if your server passed a custom property called 'foo', then do this:
        //             console.log(`Value of 'foo': ${message.data.foo}`);
        //         }
        //     })
        //     .then(
        //         () => {
        //             console.log("firebase.init done");
        //         },
        //         error => {
        //             console.log(`firebase.init error: ${error}`);
        //         }
        //     );
    }
}
