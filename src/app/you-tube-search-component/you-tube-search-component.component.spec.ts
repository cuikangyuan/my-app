import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouTubeSearchComponentComponent } from './you-tube-search-component.component';

describe('YouTubeSearchComponentComponent', () => {
  let component: YouTubeSearchComponentComponent;
  let fixture: ComponentFixture<YouTubeSearchComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouTubeSearchComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouTubeSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
