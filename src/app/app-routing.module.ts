import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./home-page/home-page.component";
import { PlayPageComponent } from "./play-page/play-page.component";
import { AnalyzePageComponent } from "./analyze-page/analyze-page.component";
import { NotationPageComponent } from "./notation-page/notation-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "play", component: PlayPageComponent },
  { path: "analyze", component: AnalyzePageComponent },
  { path: "notation", component: NotationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
