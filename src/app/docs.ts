export interface Doc {
  name: string;
  body: string;
  isBold: boolean;
  isItalic: boolean;
  isUnderlined: boolean;
  fonttype: string;
  fontsize: number;
  fontcolor: string;
  highlight: string;
}

export const docs = [
  {
    name: 'My Test Document',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    fonttype: 'Arial',
    fontsize: 11,
    fontcolor: '000000',
    highlight: 'ffffff',
  },
  {
    name: 'Wild Doc',
    body: 'Careful! This doc can make those who see it go wild.',
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    fonttype: 'Arial',
    fontsize: 11,
    fontcolor: '000000',
    highlight: 'ffffff',
  },
  {
    name: 'random',
    body: '&*^$E%DRYUIO*(JPJI^&*',
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    fonttype: 'Arial',
    fontsize: 11,
    fontcolor: '000000',
    highlight: 'ffffff',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
