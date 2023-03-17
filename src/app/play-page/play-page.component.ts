import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-play-page",
  templateUrl: "./play-page.component.html",
  styleUrls: ["./play-page.component.scss"],
})
export class PlayPageComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("Xadrez - Play");
  }
}
