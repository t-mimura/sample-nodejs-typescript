/// <reference path="../typings/main/ambient/node/node.d.ts" />

declare module "iconv-lite" {
  export function decode(buffer: Buffer, encoding: string): string;
  export function encode(text: string, encoding: string): Buffer;
  export function encodingExists(encoding: string): boolean;
}
