import { Component } from '@angular/core';
import { Link1Component } from './link1/link1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-mat-app';
    action= 'link1';
}
