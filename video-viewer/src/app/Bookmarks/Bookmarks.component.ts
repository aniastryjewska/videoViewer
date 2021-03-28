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


  constructor() { }

  ngOnInit(): void {
  }

bookmarkVideo() {
 
  this.bookmarks.push(this.newVideoID)
  console.log(this.bookmarks)
  localStorage.setItem("Bookmarks", JSON.stringify(this.bookmarks));
  console.log(localStorage.getItem("Bookmarks"))
}


showBookmarks() {
this.isShow = !this.isShow
}

// showNumberOfBookmarked() {
//   console.log("5555")
// //   let Bookmarked = localStorage.getItem("Bookmarks")
// }


}
