let wasm;
export function __wbg_set_wasm(val) {
	wasm = val;
}

const lTextDecoder =
	typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
	if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
		cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
	}
	return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
	return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
	if (heap_next === heap.length) heap.push(heap.length + 1);
	const idx = heap_next;
	heap_next = heap[idx];

	heap[idx] = obj;
	return idx;
}

function getObject(idx) {
	return heap[idx];
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder =
	typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString =
	typeof cachedTextEncoder.encodeInto === 'function'
		? function (arg, view) {
				return cachedTextEncoder.encodeInto(arg, view);
		  }
		: function (arg, view) {
				const buf = cachedTextEncoder.encode(arg);
				view.set(buf);
				return {
					read: arg.length,
					written: buf.length
				};
		  };

function passStringToWasm0(arg, malloc, realloc) {
	if (realloc === undefined) {
		const buf = cachedTextEncoder.encode(arg);
		const ptr = malloc(buf.length);
		getUint8Memory0()
			.subarray(ptr, ptr + buf.length)
			.set(buf);
		WASM_VECTOR_LEN = buf.length;
		return ptr;
	}

	let len = arg.length;
	let ptr = malloc(len);

	const mem = getUint8Memory0();

	let offset = 0;

	for (; offset < len; offset++) {
		const code = arg.charCodeAt(offset);
		if (code > 0x7f) break;
		mem[ptr + offset] = code;
	}

	if (offset !== len) {
		if (offset !== 0) {
			arg = arg.slice(offset);
		}
		ptr = realloc(ptr, len, (len = offset + arg.length * 3));
		const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
		const ret = encodeString(arg, view);

		offset += ret.written;
	}

	WASM_VECTOR_LEN = offset;
	return ptr;
}

function isLikeNone(x) {
	return x === undefined || x === null;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
	if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
		cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
	}
	return cachedInt32Memory0;
}

function dropObject(idx) {
	if (idx < 132) return;
	heap[idx] = heap_next;
	heap_next = idx;
}

function takeObject(idx) {
	const ret = getObject(idx);
	dropObject(idx);
	return ret;
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
	if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
		cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
	}
	return cachedFloat64Memory0;
}

function debugString(val) {
	// primitive types
	const type = typeof val;
	if (type == 'number' || type == 'boolean' || val == null) {
		return `${val}`;
	}
	if (type == 'string') {
		return `"${val}"`;
	}
	if (type == 'symbol') {
		const description = val.description;
		if (description == null) {
			return 'Symbol';
		} else {
			return `Symbol(${description})`;
		}
	}
	if (type == 'function') {
		const name = val.name;
		if (typeof name == 'string' && name.length > 0) {
			return `Function(${name})`;
		} else {
			return 'Function';
		}
	}
	// objects
	if (Array.isArray(val)) {
		const length = val.length;
		let debug = '[';
		if (length > 0) {
			debug += debugString(val[0]);
		}
		for (let i = 1; i < length; i++) {
			debug += ', ' + debugString(val[i]);
		}
		debug += ']';
		return debug;
	}
	// Test for built-in
	const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
	let className;
	if (builtInMatches.length > 1) {
		className = builtInMatches[1];
	} else {
		// Failed to match the standard '[object ClassName]'
		return toString.call(val);
	}
	if (className == 'Object') {
		// we're a user defined class or Object
		// JSON.stringify avoids problems with cycles, and is generally much
		// easier than looping through ownProperties of `val`.
		try {
			return 'Object(' + JSON.stringify(val) + ')';
		} catch (_) {
			return 'Object';
		}
	}
	// errors
	if (val instanceof Error) {
		return `${val.name}: ${val.message}\n${val.stack}`;
	}
	// TODO we could test for more things here, like `Set`s and `Map`s.
	return className;
}
/**
 */
export function wasm_main() {
	wasm.wasm_main();
}

/**
 * @returns {any}
 */
export function startpos() {
	const ret = wasm.startpos();
	return takeObject(ret);
}

/**
 * @param {string} fen
 * @param {string} m
 * @param {string} promotion
 * @returns {any}
 */
export function make_move(fen, m, promotion) {
	const ptr0 = passStringToWasm0(fen, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	const len0 = WASM_VECTOR_LEN;
	const ptr1 = passStringToWasm0(m, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	const len1 = WASM_VECTOR_LEN;
	const ret = wasm.make_move(ptr0, len0, ptr1, len1, promotion.codePointAt(0));
	return takeObject(ret);
}

let cachedUint32Memory0 = null;

function getUint32Memory0() {
	if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
		cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
	}
	return cachedUint32Memory0;
}

function getArrayJsValueFromWasm0(ptr, len) {
	const mem = getUint32Memory0();
	const slice = mem.subarray(ptr / 4, ptr / 4 + len);
	const result = [];
	for (let i = 0; i < slice.length; i++) {
		result.push(takeObject(slice[i]));
	}
	return result;
}
/**
 * @param {string} fen
 * @param {any} from
 * @param {any} to
 * @returns {any[]}
 */
export function legal_moves(fen, from, to) {
	try {
		const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
		const ptr0 = passStringToWasm0(fen, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
		const len0 = WASM_VECTOR_LEN;
		wasm.legal_moves(retptr, ptr0, len0, addHeapObject(from), addHeapObject(to));
		var r0 = getInt32Memory0()[retptr / 4 + 0];
		var r1 = getInt32Memory0()[retptr / 4 + 1];
		var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
		wasm.__wbindgen_free(r0, r1 * 4);
		return v1;
	} finally {
		wasm.__wbindgen_add_to_stack_pointer(16);
	}
}

/**
 * @param {string} fen
 * @returns {any}
 */
export function side_to_move(fen) {
	const ptr0 = passStringToWasm0(fen, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	const len0 = WASM_VECTOR_LEN;
	const ret = wasm.side_to_move(ptr0, len0);
	return takeObject(ret);
}

/**
 * @param {string} fen
 * @returns {any}
 */
export function evaluate(fen) {
	const ptr0 = passStringToWasm0(fen, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	const len0 = WASM_VECTOR_LEN;
	const ret = wasm.evaluate(ptr0, len0);
	return takeObject(ret);
}

/**
 * @param {string} fen
 * @returns {any}
 */
export function game_state(fen) {
	const ptr0 = passStringToWasm0(fen, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	const len0 = WASM_VECTOR_LEN;
	const ret = wasm.game_state(ptr0, len0);
	return takeObject(ret);
}

/**
 * @param {string} fen
 * @param {any} max_time
 * @param {any} max_depth
 * @returns {any}
 */
export function search(fen, max_time, max_depth) {
	const ptr0 = passStringToWasm0(fen, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	const len0 = WASM_VECTOR_LEN;
	const ret = wasm.search(ptr0, len0, addHeapObject(max_time), addHeapObject(max_depth));
	return takeObject(ret);
}

function handleError(f, args) {
	try {
		return f.apply(this, args);
	} catch (e) {
		wasm.__wbindgen_exn_store(addHeapObject(e));
	}
}

export function __wbindgen_string_new(arg0, arg1) {
	const ret = getStringFromWasm0(arg0, arg1);
	return addHeapObject(ret);
}

export function __wbindgen_string_get(arg0, arg1) {
	const obj = getObject(arg1);
	const ret = typeof obj === 'string' ? obj : undefined;
	var ptr0 = isLikeNone(ret)
		? 0
		: passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	var len0 = WASM_VECTOR_LEN;
	getInt32Memory0()[arg0 / 4 + 1] = len0;
	getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}

export function __wbindgen_object_drop_ref(arg0) {
	takeObject(arg0);
}

export function __wbindgen_number_new(arg0) {
	const ret = arg0;
	return addHeapObject(ret);
}

export function __wbindgen_number_get(arg0, arg1) {
	const obj = getObject(arg1);
	const ret = typeof obj === 'number' ? obj : undefined;
	getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
	getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
}

export function __wbg_new_abda76e883ba8a5f() {
	const ret = new Error();
	return addHeapObject(ret);
}

export function __wbg_stack_658279fe44541cf6(arg0, arg1) {
	const ret = getObject(arg1).stack;
	const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	const len0 = WASM_VECTOR_LEN;
	getInt32Memory0()[arg0 / 4 + 1] = len0;
	getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}

export function __wbg_error_f851667af71bcfc6(arg0, arg1) {
	try {
		console.error(getStringFromWasm0(arg0, arg1));
	} finally {
		wasm.__wbindgen_free(arg0, arg1);
	}
}

export function __wbg_now_8172cd917e5eda6b(arg0) {
	const ret = getObject(arg0).now();
	return ret;
}

export function __wbg_newnoargs_b5b063fc6c2f0376(arg0, arg1) {
	const ret = new Function(getStringFromWasm0(arg0, arg1));
	return addHeapObject(ret);
}

export function __wbg_get_765201544a2b6869() {
	return handleError(function (arg0, arg1) {
		const ret = Reflect.get(getObject(arg0), getObject(arg1));
		return addHeapObject(ret);
	}, arguments);
}

export function __wbg_call_97ae9d8645dc388b() {
	return handleError(function (arg0, arg1) {
		const ret = getObject(arg0).call(getObject(arg1));
		return addHeapObject(ret);
	}, arguments);
}

export function __wbindgen_object_clone_ref(arg0) {
	const ret = getObject(arg0);
	return addHeapObject(ret);
}

export function __wbg_self_6d479506f72c6a71() {
	return handleError(function () {
		const ret = self.self;
		return addHeapObject(ret);
	}, arguments);
}

export function __wbg_window_f2557cc78490aceb() {
	return handleError(function () {
		const ret = window.window;
		return addHeapObject(ret);
	}, arguments);
}

export function __wbg_globalThis_7f206bda628d5286() {
	return handleError(function () {
		const ret = globalThis.globalThis;
		return addHeapObject(ret);
	}, arguments);
}

export function __wbg_global_ba75c50d1cf384f4() {
	return handleError(function () {
		const ret = global.global;
		return addHeapObject(ret);
	}, arguments);
}

export function __wbindgen_is_undefined(arg0) {
	const ret = getObject(arg0) === undefined;
	return ret;
}

export function __wbindgen_debug_string(arg0, arg1) {
	const ret = debugString(getObject(arg1));
	const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
	const len0 = WASM_VECTOR_LEN;
	getInt32Memory0()[arg0 / 4 + 1] = len0;
	getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}

export function __wbindgen_throw(arg0, arg1) {
	throw new Error(getStringFromWasm0(arg0, arg1));
}
