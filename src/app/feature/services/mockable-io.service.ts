import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockableIOService {
  private apiUrl = 'https://demo7735084.mockable.io/top-headlines';
  constructor(private http: HttpClient) {}

  fetchTopHeadlines(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
