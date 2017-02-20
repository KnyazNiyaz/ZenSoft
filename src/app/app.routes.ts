import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {InfoPopupComponent} from './popups/info-popup/info-popup';
import {ModuleWithProviders} from "@angular/core";
import {MemoryLeakComponent} from "./memory-leak.component";

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: '',
        component: MemoryLeakComponent,
      },
      {
        path: 'info',
        component: InfoPopupComponent
      }
    ]
  }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
