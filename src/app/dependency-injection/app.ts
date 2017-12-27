import {Component, NgModule, ReflectiveInjector} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MyService} from './MyService';

@NgModule({
  declarations: [DiSampleApp],
  imports: [BrowserModule],
  bootstrap: [DiSampleApp],
  providers: [MyService]
})


@Component({
  selector: 'di-sample-app',
  template: `
    <div>
      <button (click)="invokeService()">Get Value</button>
    </div>
  `
})

export class DiSampleApp {
  myService: MyService;

  constructor() {
    let injector: any = ReflectiveInjector.resolveAndCreate([MyService]);
    this.myService = injector.get(MyService);


    console.log('Same Instance?', this.myService === injector.get(MyService));
  }


  invokeService(): void {
    console.log('MyService returned', this.myService.getValue());
  }
}

export class DiSampleAppModule {

}


