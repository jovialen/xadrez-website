import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-notation-page",
  templateUrl: "./notation-page.component.html",
  styleUrls: ["./notation-page.component.scss"],
})
export class NotationPageComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("Xadrez - Notation");
  }
}
