/* tslint:disable */
/* eslint-disable */
/**
*/
export function wasm_main(): void;
/**
* @param {string} fen
* @returns {any}
*/
export function evaluate(fen: string): any;
/**
* @returns {string}
*/
export function startpos(): string;
/**
* @param {string} fen
* @returns {any}
*/
export function side_to_move(fen: string): any;
/**
* @param {string} fen
* @returns {any}
*/
export function game_state(fen: string): any;
/**
* @param {string} fen
* @param {string} m
* @returns {any}
*/
export function make_move(fen: string, m: string): any;
/**
* @param {string} fen
* @param {any} from
* @param {any} to
* @returns {any[]}
*/
export function legal_moves(fen: string, from: any, to: any): any[];
