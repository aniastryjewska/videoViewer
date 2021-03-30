import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  
  isShow = true;

  @Input() newVideoID;
  @Input() bookmarks;
  @Input() numberOfBookmarks;
  

  constructor() { }

  ngOnInit(): void {
  }

bookmarkVideo() {
  if(localStorage.getItem("Bookmarks")) {
    this.bookmarks = JSON.parse(localStorage.getItem("Bookmarks"))
  }
  console.log(this.bookmarks)
  this.bookmarks.push(this.newVideoID)
  console.log(this.bookmarks)

  this.numberOfBookmarks = this.bookmarks.length

  localStorage.setItem("Bookmarks", JSON.stringify(this.bookmarks));
  console.log(localStorage.getItem("Bookmarks"))

}


showBookmarks() {
this.isShow = !this.isShow
}


}
