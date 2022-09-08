import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_September';

Test="";
Updatedvalue="";
Evntemittest(eventdetails:any){
  // console.log("I am in app component",eventdetails);
  this.Updatedvalue=eventdetails;
}

  Evntclick(){
    this.Test="This is Sparta";
  }
}
