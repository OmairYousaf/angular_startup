import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tasbeeh-comp1',
  templateUrl: './tasbeeh-comp1.component.html',
  styleUrls: ['./tasbeeh-comp1.component.scss']
})
export class TasbeehComp1Component {

 @Output() counterChange=new EventEmitter<number>();
 counter:number=0;
receivedValue:number=0;

 handleNewItem(value: number) {
  this.receivedValue = value;
}

 increment(){
  this.counter++
 }


 reset(){
  this.counter=0;
 }

}
