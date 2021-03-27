import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() videosHistory;
  @Input() currentVideoID: string;
  newVideoLink:string = "";

  constructor() { }

  ngOnInit(): void {
  }

addVideoToHistory () {

this.currentVideoID = this.newVideoLink;
console.log(this.currentVideoID)

 this.videosHistory.push({
    id: "PLACEHOLDER",
    title: this.newVideoLink
  });

  console.log(this.videosHistory)

  this.newVideoLink = "";
}


}
