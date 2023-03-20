import { Component } from '@angular/core';

import {
  faChessPawn,
  faChessRook,
  faChessKnight,
  faChessBishop,
  faChessQueen,
  faChessKing
} from '@fortawesome/free-solid-svg-icons';

const PAWN = "p";
const ROOK = "r";
const KNIGHT = "n";
const BISHOP = "b";
const QUEEN = "q";
const KING = "k";
const EMPTY = " ";

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent {
  faPawn = faChessPawn;
  faRook = faChessRook;
  faKnight = faChessKnight;
  faBishop = faChessBishop;
  faQueen = faChessQueen;
  faKing = faChessKing;

  pieces: string[][] = [];

  ngOnInit() {
    this.emptyBoard();
  }

  emptyBoard() {
    for (let r = 0; r < 8; r++) {
      let row = [];
      for (let c = 0; c < 8; c++) {
        row.push(EMPTY);
      }
      this.pieces.push(row);
    }
  }

  isPawn(row: number, col: number): boolean {
    return this.pieces[row][col] === PAWN;
  }

  isRook(row: number, col: number): boolean {
    return this.pieces[row][col] === ROOK;
  }

  isKnight(row: number, col: number): boolean {
    return this.pieces[row][col] === KNIGHT;
  }

  isBishop(row: number, col: number): boolean {
    return this.pieces[row][col] === BISHOP;
  }

  isQueen(row: number, col: number): boolean {
    return this.pieces[row][col] === QUEEN;
  }

  isKing(row: number, col: number): boolean {
    return this.pieces[row][col] === KING;
  }

  isWhite(row: number, col: number): boolean {
    let p = this.pieces[row][col];
    return p === p.toUpperCase() && !this.isEmpty(row, col);
  }

  isEmpty(row: number, col: number): boolean {
    return this.pieces[row][col] === EMPTY;
  }
}
