import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.compent';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        BrowserModule
    ],
    providers: [],
    // bootstrap: [HomeComponent]
})

export class PagesModule { }
