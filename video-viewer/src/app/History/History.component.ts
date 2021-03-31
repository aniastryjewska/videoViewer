import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
  @Input() history;

  
  
  constructor() { }

  ngOnInit(): void {
  }

  play() {

  }

}
