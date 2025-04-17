import { Component, OnInit } from '@angular/core';
import { ClassService, SchoolClass } from '../../../../core/services/class.service';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  classes: SchoolClass[] = [];

  constructor(private classService: ClassService, private router: Router) {}

  ngOnInit(): void {
    this.classes = this.classService.getClasses();
  }
}
