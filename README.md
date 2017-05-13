# clone-deep

> Recursively (deep) clone a JavaScript object.

## Usage

```
var obj1 = [{ 'a': 0 }, { 'b': 1 }];
var obj2 = cloneDeep(obj1);

obj1.c = 3;
obj2.d = 4;

console.log(obj1.c, obj1.d);
// 3 undefined

console.log(obj2.c, obj2.d);
// undefined 4
```

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```
