import { Component } from '@angular/core';

declare let chance: any;
declare let faker: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testnotify';
  array = [];
  sum = 500;
  scrollDistance = 1;
  direction = '';
  latitude = 48.858276;
  longitude = 2.294591;
  mapType = 'hybrid';
  zoom = 18;

  constructor() {
    this.appendItems(0, this.sum);
  }

  // tslint:disable-next-line:variable-name
  addItems(startIndex, endIndex, _method) {
    if (document.body.scrollTop < 100) {
      for (let i = 1; i < this.sum; ++i) {
        this.array[_method]([i, ' ', this.generateWord()].join(''));
      }
    }
  }

  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }

  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'unshift');
  }

  onScrollDown(ev) {
    console.log('scrolled down!!', ev);
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);

    this.direction = 'down';
  }

  generateWord() {
    return chance.paragraph();
  }

  generateAvatar() {
  }
}
