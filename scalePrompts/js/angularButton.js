import { Component, OnInit } from "@angular/core";

@Component({
  selector: "like-button",
  templateUrl: "./like-button.component.html",
  styleUrls: ["./like-button.component.css"],
})
export class LikeButtonComponent implements OnInit {
  likes: number = 0;
  isLiked: boolean = false;

  constructor() {}

  ngOnInit() {}

  onLike() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
}
