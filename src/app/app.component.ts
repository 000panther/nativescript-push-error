import { Component, OnInit } from "@angular/core";
import { FirebaseService } from './firebase.service';

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    componentId = null;
    
    constructor(private firebaseService: FirebaseService) {
        console.log("construct AppComponent");
    }

    ngOnInit() {
        this.firebaseService.init();
    }
}
