import { BytesLike } from "../utils/index.js";
import { Coder, Result } from "./coders/abstract-coder.js";
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
export declare function encode(coders: Array<Coder>, values: ReadonlyArray<any>): string;
export declare function decode(coders: Array<Coder>, data: BytesLike, loose?: boolean): Result;
//# sourceMappingURL=coders.d.ts.map