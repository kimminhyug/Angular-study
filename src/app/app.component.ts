import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentItem = 'lamp';

  currentItems = [{
    sequence: 21,
    name: 'phone'
  }];
  title = 'angular-study';
}
