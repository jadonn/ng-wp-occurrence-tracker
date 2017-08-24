import { TestBed, inject } from '@angular/core/testing';

import { HttpModule } from '@angular/http';

import { AuthService } from './auth.service';
import { WindowService } from './window.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [AuthService, WindowService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
