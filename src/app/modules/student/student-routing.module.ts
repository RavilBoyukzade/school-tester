import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { TestListComponent } from './pages/test-list.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { ClassCodeComponent } from '../../student/class-code/class-code.component';

const routes: Routes = [{ path: '', component: StudentComponent },{
  path: 'tests',
  component: TestListComponent,
  canActivate: [AuthGuard] // если защита нужна
},
  { path: 'enter-class-code', component: ClassCodeComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
