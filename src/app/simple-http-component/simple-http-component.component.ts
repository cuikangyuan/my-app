import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-simple-http-component',
  templateUrl: './simple-http-component.component.html',
  styleUrls: ['./simple-http-component.component.css']
})
export class SimpleHttpComponentComponent implements OnInit {

  data: object;
  loading: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  makeRequest(): void {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  makePostRequest(): void {
    this.loading = true;
    this.http.post(
      'http://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
        })).subscribe((res) => {
          this.data = res.json();
          this.loading = false;
    });
  }

}
