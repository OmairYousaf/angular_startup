import { Component } from '@angular/core';

@Component({
  selector: 'app-tasbeeh',
  templateUrl: './tasbeeh.component.html',
  styleUrls: ['./tasbeeh.component.scss']
})
export class TasbeehComponent {
  count:number = 0;


  onIncrement(){
   this.count++;
  }

  onDecrement(){
    if(this.count !== 0){
    this.count--;
  }
  }

  onReset(){
    this.count=0;
   }


  
}
