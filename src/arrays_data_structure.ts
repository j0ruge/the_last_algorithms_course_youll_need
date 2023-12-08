const array_buffer = new ArrayBuffer(6);
console.log(array_buffer);

const uint8_array = new Uint8Array(array_buffer);

console.log(uint8_array);

uint8_array[0] = 45;
console.log(array_buffer);
console.log(uint8_array);

uint8_array[2] = 45;
console.log(array_buffer);
console.log(uint8_array);

const uint16_array = new Uint16Array(array_buffer);
uint16_array[2] = 0x4545;
console.log(uint16_array);
console.log(uint8_array);
