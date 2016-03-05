/// <reference path="../typings/main.d.ts" />

import * as iconv from 'iconv-lite';

import { myspace } from './otherfile';

const str = iconv.decode(new Buffer([0x68, 0x65, 0x6c, 0x6f]), 'win1251');
console.log(str);

console.log(
  iconv.decode(iconv.encode('Simple input string', 'win1251'), 'win1251')
);

console.log('us-ascii => ', iconv.encodingExists('us-ascii'));

new myspace.Hoge().sayHoge();

