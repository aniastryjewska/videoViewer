import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  videosHistory = [
    {
        "id":1,
        "title": "first video"
     },
     {
         "id":2,
         "title": "second video"
      }
    ]

  title = 'video-viewer';
}
