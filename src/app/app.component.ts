import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-project5';

  name = 'Peter'

  msg = "hello from felix"

  fullName = "Felix ITs"

  birthday = new Date(1993, 3, 6)

}

