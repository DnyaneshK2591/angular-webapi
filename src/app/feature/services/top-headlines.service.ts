import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TopHeadlines } from '../models/TopHeadlines';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class TopHeadlinesService {
  private apiUrl = 'https://demo7735084.mockable.io/top-headlines00';
  constructor(
    private http: HttpClient,
    private loading: LoadingService
  ) {}

  fetchTopHeadlines(): Observable<any> {
    return this.loading.showLoaderUntilCompleted(
      this.http.get<any>(this.apiUrl)
    );
  }
}
