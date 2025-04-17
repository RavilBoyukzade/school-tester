import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { CreateClassComponent } from './pages/create-class/create-class.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ClassDetailComponent } from './pages/class-detail/class-detail.component';
import { AddTestComponent } from './pages/add-test/add-test.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClassesComponent,
    TeacherComponent,
    DashboardComponent,
    ClassesComponent,
    CreateClassComponent,
    ClassDetailComponent,
    AddTestComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class TeacherModule { }
