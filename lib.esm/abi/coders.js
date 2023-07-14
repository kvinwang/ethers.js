import { Reader, Writer } from "./coders/abstract-coder.js";
import { AddressCoder } from "./coders/address.js";
import { ArrayCoder } from "./coders/array.js";
import { BooleanCoder } from "./coders/boolean.js";
import { BytesCoder } from "./coders/bytes.js";
import { FixedBytesCoder } from "./coders/fixed-bytes.js";
import { NullCoder } from "./coders/null.js";
import { NumberCoder } from "./coders/number.js";
import { StringCoder } from "./coders/string.js";
import { TupleCoder } from "./coders/tuple.js";
export { AddressCoder, ArrayCoder, BooleanCoder, BytesCoder, FixedBytesCoder, NullCoder, NumberCoder, StringCoder, TupleCoder, };
export function encode(coders, values) {
    const coder = new TupleCoder(coders, "_");
    const writer = new Writer();
    coder.encode(writer, values);
    return writer.data;
}
export function decode(coders, data, loose) {
    const coder = new TupleCoder(coders, "_");
    return coder.decode(new Reader(data, loose));
}
//# sourceMappingURL=coders.js.map