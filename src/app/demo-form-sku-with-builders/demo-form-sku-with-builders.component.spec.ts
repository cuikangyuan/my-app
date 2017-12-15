import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuWithBuildersComponent } from './demo-form-sku-with-builders.component';

describe('DemoFormSkuWithBuildersComponent', () => {
  let component: DemoFormSkuWithBuildersComponent;
  let fixture: ComponentFixture<DemoFormSkuWithBuildersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSkuWithBuildersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuWithBuildersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
