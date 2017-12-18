import { BrowserModule } from '@angular/platform-browser';
import {
	NgModule
} from '@angular/core';

import {
	FormsModule,
	ReactiveFormsModule
} from '@angular/forms'


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


@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuildersComponent,
    DemoFormNgModelComponent,
    SimpleHttpComponentComponent,
    YouTubeSearchComponent,
    SearchBox,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [youTubeServiceInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
