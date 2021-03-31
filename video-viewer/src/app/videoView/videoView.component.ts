import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'videoView',
  templateUrl: './videoView.component.html',
  styleUrls: ['./videoView.component.css']
})
export class VideoviewComponent implements OnInit {

@Input() videos;



  constructor() { }

  ngOnInit(): void {
    
  }
  
}
