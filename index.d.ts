/**
Check if a string is a [valid filename](https://github.com/sindresorhus/filename-reserved-regex).

@param {String} value - A string.
@returns {Boolean} True.

@example
```
import main from 'package-name';

main('foo/bar');
//=> true

main('foo-bar');
//=> true
```
*/
export default function main(value: string): boolean;
