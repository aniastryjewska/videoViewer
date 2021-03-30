import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { VideoLink } from 'src/shared/models/video-link-model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {

  @Input() video: VideoLink = new VideoLink('');
  @Output() formSubmit: EventEmitter<VideoLink> = new EventEmitter<VideoLink>()
  constructor() { }

  ngOnInit() {
  }

 onSubmit (form: NgForm) {
 console.log(form)
 this.formSubmit.emit(form.value);
 this.video.link = "";

 //console.log("This is video link:", this.video.link)
}

}
