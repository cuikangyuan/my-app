import {Component, NgModule, ReflectiveInjector} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [DiSampleApp],
  imports: [BrowserModule],
  bootstrap: [DiSampleApp]
})


@Component({
  selector: 'di-sample-app',
  template: `
  <button (click)="invokeService()">Get Value</button>
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


