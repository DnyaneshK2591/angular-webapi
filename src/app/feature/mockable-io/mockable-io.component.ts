import { Component, OnInit } from '@angular/core';
import { MockableIOService } from '../services/mockable-io.service';


@Component({
  selector: 'app-mockable-io',
  templateUrl: './mockable-io.component.html',
  styleUrls: ['./mockable-io.component.scss'],
})
export class MockableIoComponent implements OnInit {
  articles: any;
  constructor(
    private mockableIOService: MockableIOService,
  ) {}
  ngOnInit(): void {
    this.getTopHeadlines();
  }
  getTopHeadlines() {
    this.mockableIOService.fetchTopHeadlines().subscribe(data => {
      this.articles = data['articles'];
    });
  }
}
