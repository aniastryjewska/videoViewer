import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarksComponent } from './Bookmarks/Bookmarks.component';
import { HistoryComponent } from './History/History.component';
import { SearchBarComponent } from './searchBar/searchBar.component';
import { VideoViewComponent } from './videoView/videoView.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    VideoViewComponent,
    HistoryComponent,
    BookmarksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
