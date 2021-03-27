import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() videosHistory;
  newVideoLink:string = "";

  constructor() { }

  ngOnInit(): void {
  }

playAndAddVideo () {




 this.videosHistory.push({
    id: "PLACEHOLDER",
    title: "PLACEHOLDER"
  });

  console.log(this.videosHistory)

  this.newVideoLink = "";
}


}
