import { Component, OnInit } from '@angular/core';
import { NewsBlogService } from '../services/news-blog.service';

@Component({
  selector: 'cf-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogs = [];

  constructor(private blogService : NewsBlogService) {}


  ngOnInit() {
    this.blogs = this.blogService.getBlogs();
    
  }
  



}
