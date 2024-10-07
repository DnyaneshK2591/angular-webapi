import { Component, OnInit } from '@angular/core';

import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { MessagesService } from 'src/app/shared/components/messages/messages.service';
import { NewsApiService } from '../services/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: any;

  constructor(
    private apiService: NewsApiService,
    public loading: LoadingService,
    public messages: MessagesService
  ) {}

  ngOnInit(): void {
    this.loading.loadingOn();
    this.apiService.getNews().subscribe(data => {
      this.articles = data['articles'];
      this.loading.loadingOff();
    });
  }
}
