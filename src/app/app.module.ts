import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlinesComponent } from './components/top-headlines/top-headlines.component';
import { SearchTopicComponent } from './components/search-topic/search-topic.component';
import { PublicationsComponent } from './components/publications/publications.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadlinesComponent,
    SearchTopicComponent,
    PublicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
