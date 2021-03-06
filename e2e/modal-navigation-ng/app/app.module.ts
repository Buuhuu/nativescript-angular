import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./home/home.component";
import { SecondComponent } from "./second/second.component";
import { ModalSecondComponent } from "./modal-second/modal-second.component";
import { ModalComponent } from "./modal/modal.component";
import { NestedModalComponent } from "./modal-nested/modal-nested.component";
import { ModalRouterComponent } from "./modal/modal-router/modal-router.component";

import { enable as traceEnable, addCategories } from "tns-core-modules/trace";
import { routerTraceCategory } from "nativescript-angular/trace";

// addCategories(routerTraceCategory);
// traceEnable();

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    entryComponents: [ModalRouterComponent, NestedModalComponent, ModalComponent],
    declarations: [
        AppComponent,
        HomeComponent,
        SecondComponent,
        ModalComponent,
        NestedModalComponent,
        ModalRouterComponent,
        ModalSecondComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
