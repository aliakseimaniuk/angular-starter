import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from './people';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private httpClient: HttpClient) {}

  getAll(page?: number): Observable<People> {
    page = page || 1;
    const url = `${AppConfig.API_ENDPOINT}people/?page=${page}`;

    return this.httpClient.get<People>(url);
  }
}
