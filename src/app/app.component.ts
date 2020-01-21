import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "./firebase.service";

let globalFirebaseService: any = null;

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    componentId = null;

    constructor(private firebaseService: FirebaseService) {
        console.log("construct AppComponent" + globalFirebaseService);
    }

    ngOnInit() {
        if (!globalFirebaseService) {
            this.firebaseService.init();
            globalFirebaseService = this.firebaseService;
        } else {
            this.firebaseService.addCallbackForNotificationService();
        }
    }
}
