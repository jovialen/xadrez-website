import { Component, AfterViewInit } from '@angular/core';

import { ChessBoard } from "chessboard-ts";

let next_id = 0;

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements AfterViewInit {
  id: number = 0;
  chessboard?: ChessBoard;
  
  ngAfterViewInit() {
    this.id = next_id;
    next_id++;
    this.chessboard = new ChessBoard({
      selector: `chessboard-${this.id}`,
      config: {
        position: "start",
        draggable: true,
      }
    });
  }
}
