import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("Xadrez - Home");
  }
}
