import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NewComponent } from './views/new/new.component';
import { EditComponent } from './views/edit/edit.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ContentDashboardComponent } from './components/content-dashboard/content-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'patients',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: ContentDashboardComponent },
      { path: 'new', component: NewComponent },
      { path: 'edit/:id', component: EditComponent },
      { path: '404', component: NotFoundComponent },
      { path: '**', component: NotFoundComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const viewsComponent = [
  LoginComponent,
  DashboardComponent,
  NewComponent,
  EditComponent,
  NotFoundComponent
];
