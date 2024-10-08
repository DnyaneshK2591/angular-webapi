import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class TopHeadlinesService {
  private apiUrl = 'https://demo7735084.mockable.io/top-headlines';
  constructor(private http: HttpClient) {}

  fetchTopHeadlines(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
