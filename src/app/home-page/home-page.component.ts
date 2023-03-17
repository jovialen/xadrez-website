import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

import { faChessRook, faBrain } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
  faChessRook = faChessRook;
  faBrain = faBrain;

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("Xadrez - Home");
  }
}
