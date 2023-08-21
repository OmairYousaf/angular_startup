import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-action',
  templateUrl: './counter-action.component.html',
  styleUrls: ['./counter-action.component.scss']
})
export class CounterActionComponent {
  outputValue=0;
  @Output() signal = new EventEmitter<number>();

  onIncrement(){
    this.outputValue++
   this.signal.emit(this.outputValue)

  }

  onDecrement(){
    if(this.outputValue!== 0){
    this.outputValue--
   this.signal.emit(this.outputValue)
  }
  }



  onReset(){
    this.outputValue=0
    this.signal.emit(this.outputValue)
  }
}
