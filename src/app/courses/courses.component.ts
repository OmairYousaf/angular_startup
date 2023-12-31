import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  constructor(service:CoursesService){
    this.courses=service.getCourses();
  }
  title:string='Courses';
   courses:string[]=[]
}
