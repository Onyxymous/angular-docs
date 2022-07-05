import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc, docs } from '../docs';

@Component({
  selector: 'app-doc-bar',
  templateUrl: './doc-bar.component.html',
  styleUrls: ['./doc-bar.component.css'],
})
export class DocBarComponent implements OnInit {
  fonts: string[] = [
    'Arial',
    'Brush Script MT',
    'Courier New',
    'Garamond',
    'Georgia',
    'Helvetica',
    'Tahoma',
    'Times New Roman',
    'Trebuchet MS',
    'Verdana',
  ];
  sizes: number[] = [
    8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,
  ];
  sfont: string = "Arial";
  ssize: number = 11;
  @Input() doc: Doc | undefined;
  @Output() bold = new EventEmitter();
  @Output() italic = new EventEmitter();
  @Output() underline = new EventEmitter();
  constructor(private route: ActivatedRoute) {}

  updateFontType(doc: Doc) {
    var type = '';

    switch (doc.fonttype) {
      case 'Brush Script MT':
        type = 'Brush Script MT';
        break;
      case 'Courier New':
        type = 'Courier New';
        break;
      case 'Garamond':
        type = 'Garamond';
        break;
      case 'Georgia':
        type = 'Georgia';
        break;
      case 'Helvetica':
        type = 'Helvetica';
        break;
      case 'Tahoma':
        type = 'Tahoma';
        break;
      case 'Times New Roman':
        type = 'Times New Roman';
        break;
      case 'Trebuchet MS':
        type = 'Trebuchet MS';
        break;
      case 'Verdana':
        type = 'Verdana';
        break;
      default:
        type = 'Arial';
        break;
    }

    doc.fonttype = type;
    return type;
  }

  updateFontSize(doc: Doc) {
    var size = -1;

    switch (doc.fontsize) {
      case 8:
        size = 8;
        break;
      case 9:
        size = 9;
        break;
      case 10:
        size = 10;
        break;
      case 12:
        size = 12;
        break;
      case 14:
        size = 14;
        break;
      case 16:
        size = 16;
        break;
      case 18:
        size = 18;
        break;
      case 24:
        size = 24;
        break;
      case 36:
        size = 36;
        break;
      case 48:
        size = 48;
        break;
      case 72:
        size = 72;
        break;
      default:
        size = 11;
        break;
    }

    doc.fontsize = size;
    return size;
  }

  boldButtonSelect(doc: Doc) {
    if (!doc.isBold) {
      return 0.5;
    } else {
      return 1;
    }
  }

  italicButtonSelect(doc: Doc) {
    if (!doc.isItalic) {
      return 0.5;
    } else {
      return 1;
    }
  }

  underlinedButtonSelect(doc: Doc) {
    if (!doc.isUnderlined) {
      return 0.5;
    } else {
      return 1;
    }
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const docNameFromRoute = String(routeParams.get('docName'));

    this.doc = docs.find((doc) => doc.name === docNameFromRoute);

    if (this.doc) {
      this.sfont = this.updateFontType(this.doc);
      this.ssize = this.updateFontSize(this.doc);
    }
  }
}
