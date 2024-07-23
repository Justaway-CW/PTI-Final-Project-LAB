import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { BlogComponent } from './blog/blog.component';
import { DevelopersComponent } from './developers/developers.component';
import { NewsBlogService } from './services/news-blog.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewsComponent,
    BlogComponent,
    DevelopersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NewsBlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
