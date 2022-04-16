import { encrypt, decrypt } from "./index.js";
let encrypted = encrypt("Hello World!");
console.log(encrypted);
console.log(decrypt(encrypted));