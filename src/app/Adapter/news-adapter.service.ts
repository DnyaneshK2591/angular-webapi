import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsAdapterService {
  API_KEY = '21e226f5b8114bb4b99c4b8c6114ca1a';

  constructor(private httpClient: HttpClient) {}

  public getNews() {
    return this.httpClient.get<any>(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`
    );
  }
}
