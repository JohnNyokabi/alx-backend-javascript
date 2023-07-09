export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const myBuffer = new ArrayBuffer(length);
  const int8View = new Int8Array(myBuffer, 0, length);
  int8View.set([value], position);
  return new DataView(myBuffer);
}
