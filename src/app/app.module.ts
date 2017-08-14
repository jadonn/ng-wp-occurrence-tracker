import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { UserListComponent } from './user-list/user-list.component';

import { AdminComponent } from './admin/admin.component';

import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminListService } from './admin/admin-list/admin-list.service';

import { AuthService } from './auth.service';
import { AuthGuardService } from './admin/auth-guard.service';
import { WindowService } from './window.service';
import { AdminUserDetailComponent } from './admin/admin-user-detail/admin-user-detail.component';
import { AdminAddOccurrenceComponent } from './admin/admin-add-occurrence/admin-add-occurrence.component';
import { AdminAddOccurrenceService } from './admin/admin-add-occurrence/admin-add-occurrence.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminListComponent,
    UserListComponent,
    AdminUserDetailComponent,
    AdminAddOccurrenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [ AuthService, AuthGuardService, AdminAddOccurrenceService, AdminListService, WindowService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
