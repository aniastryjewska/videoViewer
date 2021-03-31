import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
  @Input() history;
  @Output() videoFromHistory = new EventEmitter();
  
  
  constructor() { }

  ngOnInit(): void {
  }

//passing the element of history that was clicked on to the app component
  play(element) {
    this.videoFromHistory.emit(element)
  }

}
