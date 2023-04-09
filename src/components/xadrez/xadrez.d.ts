/* tslint:disable */
/* eslint-disable */
/**
 */
export function wasm_main(): void;
/**
 * @returns {any}
 */
export function startpos(): any;
/**
 * @param {string} fen
 * @param {string} m
 * @param {string} promotion
 * @returns {any}
 */
export function make_move(fen: string, m: string, promotion: string): any;
/**
 * @param {string} fen
 * @param {any} from
 * @param {any} to
 * @returns {any[]}
 */
export function legal_moves(fen: string, from: any, to: any): any[];
/**
 * @param {string} fen
 * @returns {any}
 */
export function side_to_move(fen: string): any;
/**
 * @param {string} fen
 * @returns {any}
 */
export function evaluate(fen: string): any;
/**
 * @param {string} fen
 * @returns {any}
 */
export function game_state(fen: string): any;
/**
 * @param {string} fen
 * @param {any} max_time
 * @param {any} max_depth
 * @returns {any}
 */
export function search(fen: string, max_time: any, max_depth: any): any;
