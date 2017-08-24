import { TestBed, inject } from '@angular/core/testing';

import { HttpModule } from '@angular/http';

import { AdminListService } from './admin-list.service';
import { WindowService } from '../../window.service';

describe('AdminListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [AdminListService, WindowService]
    });
    (<any>window).appInfo = { home_url: 'localhost:9876' };
  });

  it('should be created', inject([AdminListService], (service: AdminListService) => {
    expect(service).toBeTruthy();
  }));
});
