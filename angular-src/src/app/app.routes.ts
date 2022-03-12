import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Views
import { TimerViewComponent } from './views/timer-view/timer-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  {path: 'timer',component: TimerViewComponent},
  {path: 'about',component: AboutViewComponent},
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'history', component: HistoryComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutesModule { }
