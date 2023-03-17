import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-analyze-page",
  templateUrl: "./analyze-page.component.html",
  styleUrls: ["./analyze-page.component.scss"],
})
export class AnalyzePageComponent {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("Xadrez - Analyze");
  }
}
