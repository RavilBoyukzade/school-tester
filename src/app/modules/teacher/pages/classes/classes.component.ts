import { Component, OnInit } from '@angular/core';
import { ClassService,SchoolClass } from '../../../../core/services/class.service';
@Component({
  standalone:false,
  selector: 'app-classes',
  templateUrl: './classes.component.html'
})
export class ClassesComponent implements OnInit {
  classes: SchoolClass[] = [];

  constructor(private classService: ClassService) {}

  ngOnInit(): void {
    this.classes = this.classService.getClasses();
  }
}
