import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component {

  title: string = 'Component 1';

  message: string = '';
  enteredMessage: string = '';
  option: string = '';
  selectedOption: string = '';
  isChecked: boolean = false;

  gender: string;
  genders: string[] = ['Male', 'Female', 'Other',];
  onClick() {
    console.log('pressed....');
    this.enteredMessage = this.message;
    this.selectedOption = this.option;
  }

  onCheckboxChange(event: any) {
    console.log(event)
    this.isChecked = event;
  }

  // onBlur() {

  //   this.enteredMessage = '';
  // }
  // onFocus() {
  //   // this.message = '';
  //   // this.enteredMessage = '';
  // }
}
