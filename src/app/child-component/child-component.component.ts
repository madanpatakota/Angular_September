import { ThisReceiver } from '@angular/compiler';
import { Component,Input, OnInit,OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit ,OnChanges {

  constructor() { }
  @Input() Bill:any;
 Textinput="";



ngOnChanges(changes:SimpleChanges):void{
    this.Textinput=this.Bill;
  }

  ngOnInit(): void {
  }

}
