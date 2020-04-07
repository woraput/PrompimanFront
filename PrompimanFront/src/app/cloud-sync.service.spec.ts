import { TestBed } from '@angular/core/testing';

import { CloudSyncService } from './cloud-sync.service';

describe('CloudSyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudSyncService = TestBed.get(CloudSyncService);
    expect(service).toBeTruthy();
  });
});
