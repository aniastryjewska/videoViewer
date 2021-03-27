import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-videoview',
  templateUrl: './videoview.component.html',
  styleUrls: ['./videoview.component.css']
})
export class VideoviewComponent implements OnInit {
@Input() currentVideoID: string;


  constructor() { }

  ngOnInit(): void {
  }

}
