"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decode = exports.encode = exports.TupleCoder = exports.StringCoder = exports.NumberCoder = exports.NullCoder = exports.FixedBytesCoder = exports.BytesCoder = exports.BooleanCoder = exports.ArrayCoder = exports.AddressCoder = void 0;
const abstract_coder_js_1 = require("./coders/abstract-coder.js");
const address_js_1 = require("./coders/address.js");
Object.defineProperty(exports, "AddressCoder", { enumerable: true, get: function () { return address_js_1.AddressCoder; } });
const array_js_1 = require("./coders/array.js");
Object.defineProperty(exports, "ArrayCoder", { enumerable: true, get: function () { return array_js_1.ArrayCoder; } });
const boolean_js_1 = require("./coders/boolean.js");
Object.defineProperty(exports, "BooleanCoder", { enumerable: true, get: function () { return boolean_js_1.BooleanCoder; } });
const bytes_js_1 = require("./coders/bytes.js");
Object.defineProperty(exports, "BytesCoder", { enumerable: true, get: function () { return bytes_js_1.BytesCoder; } });
const fixed_bytes_js_1 = require("./coders/fixed-bytes.js");
Object.defineProperty(exports, "FixedBytesCoder", { enumerable: true, get: function () { return fixed_bytes_js_1.FixedBytesCoder; } });
const null_js_1 = require("./coders/null.js");
Object.defineProperty(exports, "NullCoder", { enumerable: true, get: function () { return null_js_1.NullCoder; } });
const number_js_1 = require("./coders/number.js");
Object.defineProperty(exports, "NumberCoder", { enumerable: true, get: function () { return number_js_1.NumberCoder; } });
const string_js_1 = require("./coders/string.js");
Object.defineProperty(exports, "StringCoder", { enumerable: true, get: function () { return string_js_1.StringCoder; } });
const tuple_js_1 = require("./coders/tuple.js");
Object.defineProperty(exports, "TupleCoder", { enumerable: true, get: function () { return tuple_js_1.TupleCoder; } });
function encode(coders, values) {
    const coder = new tuple_js_1.TupleCoder(coders, "_");
    const writer = new abstract_coder_js_1.Writer();
    coder.encode(writer, values);
    return writer.data;
}
exports.encode = encode;
function decode(coders, data, loose) {
    const coder = new tuple_js_1.TupleCoder(coders, "_");
    return coder.decode(new abstract_coder_js_1.Reader(data, loose));
}
exports.decode = decode;
//# sourceMappingURL=coders.js.map