export interface Doc {
  name: string;
  docBarName: string;
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
    docBarName: 'My Test Document',
    body: '',
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    fonttype: 'Arial',
    fontsize: 11,
    fontcolor: '000000',
    highlight: 'none',
  }
];