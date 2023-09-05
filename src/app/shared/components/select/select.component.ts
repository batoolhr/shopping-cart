import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() title:string='';
  @Input() data:any[]=[];
  @Output() selectValue=new EventEmitter();
  constructor(){

  }
  detectchanges(event:any){
    this.selectValue.emit(event);
  }
}