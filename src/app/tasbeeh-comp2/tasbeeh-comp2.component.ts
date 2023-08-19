import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasbeeh-comp2',
  templateUrl: './tasbeeh-comp2.component.html',
  styleUrls: ['./tasbeeh-comp2.component.scss']
})
export class TasbeehComp2Component {
  @Output() newItemEvent = new EventEmitter<number>();
@Input() counter:number=0;

outputValue:number=0;
addNewItem(value: number) {
  this.outputValue++;
  console.log(this.outputValue)
  this.newItemEvent.emit(this.outputValue);
}

resetItem(value: number) {
  this.outputValue=0;
  console.log(this.outputValue)
  this.newItemEvent.emit(this.outputValue);
}

}
