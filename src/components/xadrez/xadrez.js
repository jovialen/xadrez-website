import * as wasm from "./xadrez_bg.wasm";
import { __wbg_set_wasm } from "./xadrez_bg.js";
__wbg_set_wasm(wasm);
export * from "./xadrez_bg.js";

wasm.__wbindgen_start();
