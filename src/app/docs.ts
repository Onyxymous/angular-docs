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
    body: 'Hello! If you can read this, you are viewing a document in this Angular program I made.',
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    fonttype: "Arial",
    fontsize: 11,
    fontcolor: "000000",
    highlight: "ffffff"
  },
  {
    name: 'Wild Doc',
    body: 'Careful! This doc can make those who see it go wild.',
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    fonttype: "Arial",
    fontsize: 11,
    fontcolor: "000000",
    highlight: "ffffff"
  },
  {
    name: 'random',
    body: '&*^$E%DRYUIO*(JPJI^&*',
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    fonttype: "Arial",
    fontsize: 11,
    fontcolor: "000000",
    highlight: "ffffff"
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
