import { BrowserModule } from '@angular/platform-browser';
import {
  Component,
  NgModule
} from '@angular/core';

import {
	FormsModule,
	ReactiveFormsModule
} from '@angular/forms';

import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuildersComponent } from './demo-form-sku-with-builders/demo-form-sku-with-builders.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component';
import {HttpModule} from '@angular/http';
import { SimpleHttpComponentComponent } from './simple-http-component/simple-http-component.component';
import {
  SearchBox, SearchResultComponent,
  YouTubeSearchComponent, YouTubeService,
  youTubeServiceInjectables
} from './you-tube-search-component/you-tube-search-component';
import {selector} from 'rxjs/operator/publish';
import {HomeComponent} from './RouterComponents/HomeComponent';
import {AboutComponent} from './RouterComponents/AboutComponent';
import {ContactComponent} from './RouterComponents/ContactComponent';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {SearchComponent} from './demo-music-search/SearchComponent';
import {SpotifyService} from './demo-music-search/SpotifyService';

/*
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contactus', redirectTo: 'contact'}
];
*/
const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuildersComponent,
    DemoFormNgModelComponent,
    SimpleHttpComponentComponent,
    YouTubeSearchComponent,
    SearchBox,
    SearchResultComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [youTubeServiceInjectables, SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }








