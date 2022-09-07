import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Submit(EmployeeEmail:HTMLInputElement){
    console.log(EmployeeEmail);
    console.log(EmployeeEmail.value);
}


Email:string="";
Designation:string="";

@ViewChild('EmployeeDesignation') 
employeeDesignation:ElementRef|undefined;

evtSubmitDesignation(){
  console.log(this.employeeDesignation);

  console.log(this.employeeDesignation?.nativeElement.value);

}


}
