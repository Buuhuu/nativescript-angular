import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import { EventData } from "tns-core-modules/data/observable";
import { Frame } from "tns-core-modules/ui/frame";
import { View } from "tns-core-modules/ui/core/view";
import { ModalRouterComponent } from "../modal/modal-router/modal-router.component";
import { PageRouterOutlet } from "nativescript-angular/router/page-router-outlet";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalComponent } from "../modal/modal.component";

@Component({
    moduleId: module.id,
    selector: "home-page",
    templateUrl: "./home.component.html"
})
export class HomeComponent {
    constructor(private modal: ModalDialogService, private vcRef: ViewContainerRef, private routerExtension: RouterExtensions) { }

    onModalNoFrame(args: EventData) {
        const options: ModalDialogOptions = {
            context: {
                navigationVisibility: false
            },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modal.showModal(ModalComponent, options).then((res: string) => {
            console.log("moda-no-frame closed");
        });
    }

    onModalFrame(args: EventData) {
        const options: ModalDialogOptions = {
            context: {
                navigationVisibility: true,
                modalRoute: "modal"
            },
            fullscreen: true,
            viewContainerRef: this.vcRef
        };

        this.modal.showModal(ModalRouterComponent, options).then((res: string) => {
            console.log("moda-frame closed");
        });
    }

    onNavigateSecond(args: EventData) {
        this.routerExtension.navigate(["second"]);
    }

    onFrameRootViewReset(args: EventData) {
        
    }
}
