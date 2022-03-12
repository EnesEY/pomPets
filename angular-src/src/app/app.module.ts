import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { TimerComponent } from './components/timer/timer.component';
import { AppRoutesModule } from './app.routes';
import { TimerViewComponent } from './views/timer-view/timer-view.component';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HistoryComponent } from './components/history/history.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { TimerToggleComponent } from './components/timer-toggle/timer-toggle.component';
import { DashToSpacePipe } from './pipes/dash-to-space/dash-to-space.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { CamelizePipe } from './pipes/camelize/camelize.pipe';
import { HistoryService } from './services/history.service';
import { SettingsService } from './services/settings.service';
import { StorageService } from './services/storage.service';
import { TimerService } from './services/timer.service';
import { DatePipe } from '@angular/common';
import { ChatboxComponent } from './components/chatbox/chatbox.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    TimerComponent,
    TimerViewComponent,
    AboutViewComponent,
    SidebarComponent,
    HistoryComponent,
    SettingsComponent,
    TimerComponent,
    ActionButtonsComponent,
    TimerToggleComponent,
    DashToSpacePipe,
    CapitalizePipe,
    CamelizePipe,
    ChatboxComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutesModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ValidateService, 
    AuthService, 
    AuthGuard,
    {
      provide: 'Window',
      useValue: window
    },
    DatePipe,
    DashToSpacePipe,
    CapitalizePipe,
    CamelizePipe,
    Title,
    TimerService,
    HistoryService,
    SettingsService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
