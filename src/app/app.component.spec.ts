import { TestBed, async } from '@angular/core/testing';

import { RoutingModule } from './routing/routing.module';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { WindowService } from './window.service';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminAddOccurrenceComponent } from './admin/admin-add-occurrence/admin-add-occurrence.component';
import { AdminUserDetailComponent } from './admin/admin-user-detail/admin-user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AdminComponent,
        AdminListComponent,
        AdminAddOccurrenceComponent,
        AdminUserDetailComponent,
        UserListComponent
      ],
      imports: [
        HttpModule,
        RoutingModule
      ],
      providers: [
        AuthService,
        WindowService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    (<any>window).appInfo = { home_url: 'localhost:9876' };
    const fixture = TestBed.createComponent( AppComponent );
    const authService = fixture.debugElement.injector.get( AuthService );
    const spy = spyOn( authService, 'checkIsAdmin' ).and.returnValue( Observable.create( function( observer ){
      observer.next( true );
      observer.complete();
    }));
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Occurrence Tracker');
  }));
});
