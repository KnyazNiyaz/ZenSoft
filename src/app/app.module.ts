import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BlogService} from './blog.service';
import {appRoutes} from "./app.routes";
import {InfoPopupComponent} from "./popups/info-popup/info-popup";
import {MemoryLeakComponent} from "./memory-leak.component";


@NgModule({
  declarations: [
    AppComponent,
    InfoPopupComponent,
    MemoryLeakComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoutes
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
