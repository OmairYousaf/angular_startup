import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tasbeeh-comp1',
  templateUrl: './tasbeeh-comp1.component.html',
  styleUrls: ['./tasbeeh-comp1.component.scss']
})
export class TasbeehComp1Component {

 @Output() counterChange=new EventEmitter<number>();
 counter1:number=0;
 counter2:number=0;
// receivedValue:number=0;

 handleNewItem1(value: number) {
  this.counter2 = value;
}
handleNewItem2(value: number) {
  this.counter1 = value;
}
//  increment(){
//   this.counter++
//  }


//  reset(){
//   this.counter=0;
//  }

}
