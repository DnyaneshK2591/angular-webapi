import { Component, OnInit } from '@angular/core';
import { TopHeadlinesService } from '../services/top-headlines.service';

@Component({
  selector: 'app-mockable-io',
  templateUrl: './mockable-io.component.html',
  styleUrls: ['./mockable-io.component.scss'],
})
export class MockableIoComponent implements OnInit{
  articles: any;
  constructor(private topHeadlinesService:TopHeadlinesService){}
  ngOnInit(): void {
    this.getTopHeadlines();
  }
  getTopHeadlines() {
    this.topHeadlinesService.fetchTopHeadlines().subscribe(data => {
      this.articles = data['articles'];
    })
}
}
