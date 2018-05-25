import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { PeopleService } from './people.service';
import { asyncError } from '../testing/async-observable-helpers';

describe('PeopleService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let peopleService: PeopleService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    peopleService = new PeopleService(<any>httpClientSpy);
  });

  it('should be created', () => {
    expect(peopleService).toBeTruthy();
  });

  it('should return an error when the server return a 404 error', async(() => {
    const errorResponse = new HttpErrorResponse({
      status: 404,
      statusText: 'Not Found'
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    peopleService.getAll().subscribe(people => fail('expected an error, not heroes'), error => expect(error.status).toBe(404));
  }));
});
