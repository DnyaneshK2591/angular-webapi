import { Component, OnInit } from '@angular/core';
import { NewsAdapterService } from '../Adapter/news-adapter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  articles: any;

  constructor(private apiService: NewsAdapterService) {}

  ngOnInit(): void {
    this.apiService.getNews().subscribe(data => {
      this.articles = data['articles'];
    });
  }
}
