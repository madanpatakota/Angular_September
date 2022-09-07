import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_September';

Test="";


  Evntclick(){
    this.Test="This is Sparta";
  }
}
