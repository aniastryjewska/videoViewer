import {Component} from "@angular/core";

@Component({
    selector: 'History',
    templateUrl: './History.component.html'
})

export class HistoryComponent {
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

}