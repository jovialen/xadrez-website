import { Component } from "@angular/core";

import {
  faChessKnight,
  faXmark,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  faChessKnight = faChessKnight;
  faGithubAlt = faGithubAlt;
  faXmark = faXmark;
  faBarsStaggered = faBarsStaggered;

  navbarActive: boolean = false;

  toggleNavbar() {
    this.navbarActive = !this.navbarActive;
  }
}
