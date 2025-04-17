import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [{ path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }, {
  path: 'teacher',
  canActivate: [AuthGuard],
  loadChildren: () =>
    import('./modules/teacher/teacher.module').then((m) => m.TeacherModule),
},
{
  path: 'student',
  canActivate: [AuthGuard],
  loadChildren: () =>
    import('./modules/student/student.module').then((m) => m.StudentModule),
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
