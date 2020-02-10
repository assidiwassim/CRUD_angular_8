import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { ConcoursComponent } from './admin/concours/concours.component';
import { AuthGuard } from './guards/auth.guard';
import { AddconcoursComponent } from './admin/addconcours/addconcours.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
     { path: '', redirectTo: '/admin/concours', pathMatch: 'full' },
      { path: 'concours', component: ConcoursComponent },
      { path: 'concours/add', component: AddconcoursComponent },
    ]
  },
  { path: '**', component: NotFoundPageComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
