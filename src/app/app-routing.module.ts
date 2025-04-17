import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ClassesComponent } from './modules/teacher/pages/classes/classes.component';
import { HomeComponent } from './modules/public/pages/home/home.component';

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
},
{
  path: 'teacher/classes',
  component: ClassesComponent
},
{ path: '', component: HomeComponent }, // 👈 маршрут по умолчанию
  { path: '**', redirectTo: '', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
