import {Component, Inject, Injectable, OnInit, EventEmitter} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {SearchResultComponent} from '../search-result/search-result.component';

@Component({
  selector: 'app-you-tube-search-component',
  templateUrl: './you-tube-search-component.component.html',
  styleUrls: ['./you-tube-search-component.component.css']
})

export var YOUTUBE_API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export var YOUTUBE_API_KEY: string = 'https://www.googleapis.com/youtube/v3/search';
let loadingGif: string = ((<any>window).__karma__) ? '' : require('images/loading.gif');

@Injectable
export class YouTubeSearchComponentComponent implements OnInit {


  constructor(private http: Http,
              @Inject(YOUTUBE_API_KEY) private apiKey: string,
              @Inject(YOUTUBE_API_URL) private apiUrl: string) { }

  ngOnInit() {
  }

  search(query: string): Observable<SearchResultComponent[]> {
    let params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResult=10`
    ].join('&');

    let queryUrl: string = `${this.apiUrl}?${params}`;

    return this.http.get(queryUrl)
      .map((res: Response) => {
        return (<any>res.json()).items().map(item => {
          return new SearchResultComponent({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnailUrl.high.url
          });
        });
      });
  }
}

export var youTubeServiceInjectables: Array<any> = [
  {provide: YouTubeService, useClass YouTubeService},
  {provide: YOUTUBE_API_KEY, useClass YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useClass YOUTUBE_API_URL}
];
