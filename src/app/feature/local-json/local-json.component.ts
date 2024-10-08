import { Component } from '@angular/core';
import { LocalJsonService } from '../services/local-json.service';

@Component({
  selector: 'app-local-json',
  templateUrl: './local-json.component.html',
  styleUrls: ['./local-json.component.scss'],
})
export class LocalJsonComponent {
  articles: any;
  constructor(
    private localJsonService: LocalJsonService,
  ) {}
  ngOnInit(): void {
    this.getTopHeadlines();
  }
  getTopHeadlines() {
    this.localJsonService.fetchTopHeadlines().subscribe(data => {
      this.articles = data['articles'];
    });
  }
}
