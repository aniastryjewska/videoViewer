import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmarksComponent } from './Bookmarks/Bookmarks.component';
import { HistoryComponent } from './history/history.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { VideoviewComponent } from './videoView/videoView.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HistoryComponent,
    BookmarksComponent,
    VideoviewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
