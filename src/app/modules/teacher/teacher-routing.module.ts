import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { CreateClassComponent } from './pages/create-class/create-class.component';
import { ClassDetailComponent } from './pages/class-detail/class-detail.component';
import { AddTestComponent } from './pages/add-test/add-test.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'classes', pathMatch: 'full' },
      { path: 'classes', component: ClassesComponent },
      { path: 'create-class', component: CreateClassComponent },
      { path: 'classes/:id', component: ClassDetailComponent },
      {
        path: 'classes/:id/add-test',
        component: AddTestComponent
      }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
