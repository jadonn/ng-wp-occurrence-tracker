import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminListComponent } from './admin-list.component';
import { AdminListService } from './admin-list.service';

import { WindowService } from '../../window.service';

describe('AdminListComponent', () => {
  let component: AdminListComponent;
  let fixture: ComponentFixture<AdminListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      declarations: [ AdminListComponent ],
      providers: [ AdminListService, WindowService ]
    })
    .compileComponents();
    (<any>window).appInfo = { home_url: 'localhost:9876' };
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListComponent);
    component = fixture.componentInstance;
    const adminListService = fixture.debugElement.injector.get( AdminListService );
    const spy = spyOn( adminListService, 'getUsers' ).and.returnValue( Observable.create( function( observer ) {
      observer.next( [ { id: '1', name: 'User 1' } ] );
      observer.complete();
    }));
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
