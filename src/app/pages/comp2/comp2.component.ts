import { Component, OnInit, ViewChild } from '@angular/core';
import { USER_DATA, User } from './data';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  constructor(private formBuilder: FormBuilder) { }
  displayedColumns: string[] = ['id', 'name', 'address', 'age', 'actions'];
  dataSource = new MatTableDataSource<User>(USER_DATA);
  dataForm: FormGroup;
  @ViewChild(MatTable) table: MatTable<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  selectedUser: User | null = null;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', [Validators.required,]],
      age: ['', [Validators.required,]]
    });
  }


  addData() {
    console.log(this.dataForm.value)

    console.log('>>>>>>>> form data', this.dataForm.value)
    console.log('>>>>>>>> selected data', this.selectedUser)
    if (this.selectedUser) {
      this.dataForm.value["id"] = this.selectedUser.id;
      const index = USER_DATA.findIndex(user => user.id === this.selectedUser.id);
      console.log('index', index)
      if (index !== -1) {
        USER_DATA[index] = this.dataForm.value;
        this.dataSource.data = [...USER_DATA];// Update the MatTableDataSource
        this.selectedUser = null;
        this.dataSource._updateChangeSubscription();
        this.dataForm.reset();
      }
    }
    else {

      console.log('cu')
      const formData = this.dataForm.value;
      const id = this.dataSource.data.length + 1;
      const newUser: User = {
        id: id.toString(),
        name: formData.name,
        address: formData.address,
        age: formData.age
      };
      console.log(newUser)
      if (!!newUser.name && !!newUser.address && !!newUser.age) {
        this.dataSource.data.unshift(newUser);
        this.dataSource._updateChangeSubscription();
        this.dataForm.reset();
      }
    }
  }


  editUser(user: User) {
    this.selectedUser = user;
    this.dataForm.patchValue({
      id: user.id,
      name: this.selectedUser.name,
      address: this.selectedUser.address,
      age: this.selectedUser.age
    })
  }
  deleteUser(user: User) {
    console.log(user)

    const index = USER_DATA.findIndex(userData => userData === user)
    if (index !== -1) {
      USER_DATA.splice(index, 1);
      this.dataSource.data = [...USER_DATA]
      this.dataSource._updateChangeSubscription();
    }
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * USER_DATA.length);
  //   this.dataSource.push(USER_DATA[randomElementIndex]);
  //   this.table.renderRows();
  // }

  // removeData() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }
}
