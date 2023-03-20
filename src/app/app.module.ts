import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { PlayPageComponent } from "./play-page/play-page.component";
import { AnalyzePageComponent } from "./analyze-page/analyze-page.component";
import { NotationPageComponent } from "./notation-page/notation-page.component";
import { ChessboardComponent } from './chessboard/chessboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    PlayPageComponent,
    AnalyzePageComponent,
    NotationPageComponent,
    ChessboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
