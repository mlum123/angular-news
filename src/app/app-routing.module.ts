import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopHeadlinesComponent } from './components/top-headlines/top-headlines.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { SearchTopicComponent } from './components/search-topic/search-topic.component';

const routes: Routes = [
  { path: '', component: TopHeadlinesComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'searchTopic', component: SearchTopicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
