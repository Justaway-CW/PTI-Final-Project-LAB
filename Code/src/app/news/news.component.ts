import { Component, OnInit } from '@angular/core';
import { NewsBlogService } from '../services/news-blog.service';

@Component({
  selector: 'cf-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public news = [];

  constructor(private newsService: NewsBlogService) { }

  ngOnInit() {
    this.news = this.newsService.getNews();
  }

}
