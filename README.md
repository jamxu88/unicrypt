# Unicrypt
An encryption algorithm that generates a unique encryption each time you call it, but it's reversable each time too.
# Usage
```
import {encrypt, decrypt} from 'unicrypt'
let encrypted = encrypt('hello world')
let decrypted = decrypt(encrypted)
```
