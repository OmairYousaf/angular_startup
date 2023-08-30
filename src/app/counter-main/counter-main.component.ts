import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-main',
  templateUrl: './counter-main.component.html',
  styleUrls: ['./counter-main.component.scss']
})
export class CounterMainComponent {

  counterVariable: number = 0
  @Input() title: string | undefined

  onSignalReceived(value: number) {

    this.counterVariable = value;
  }

}
