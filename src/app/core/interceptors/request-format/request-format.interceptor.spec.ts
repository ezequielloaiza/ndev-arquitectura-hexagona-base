import { TestBed } from '@angular/core/testing';

import { RequestFormatInterceptor } from './request-format.interceptor';

describe('RequestFormatInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [RequestFormatInterceptor],
    })
  );

  it('should be created', () => {
    const interceptor: RequestFormatInterceptor = TestBed.inject(
      RequestFormatInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
