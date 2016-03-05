/// <reference path="../typings/main.d.ts" />

import * as iconv from 'iconv-lite';

export namespace myspace {
  export class Hoge {
    sayHoge(): void {
      console.log(
        iconv.decode(iconv.encode('hoge', 'utf-16'), 'utf-16')
      );
    }
  }
}
