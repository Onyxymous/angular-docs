import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc, docs } from '../docs';

@Component({
  selector: 'app-doc-details',
  templateUrl: './doc-details.component.html',
  styleUrls: ['./doc-details.component.css'],
})
export class DocDetailsComponent implements OnInit {
  doc: Doc | undefined;
  constructor(private route: ActivatedRoute) {}

  updateBold(doc: Doc) {
    var bold = '';

    if (doc.isBold === true) {
      bold = 'bold';
    } else {
      bold = 'normal';
    }

    doc.isBold = !doc.isBold;
    return bold;
  }

  updateItalic(doc: Doc) {
    var italic = '';

    if (doc.isItalic === true) {
      italic = 'italic';
    } else {
      italic = 'normal';
    }

    doc.isItalic = !doc.isItalic;
    return italic;
  }

  updateUnderline(doc: Doc) {
    var underlined = '';

    if (doc.isUnderlined === true) {
      underlined = 'underline';
    } else {
      underlined = 'none';
    }

    doc.isUnderlined = !doc.isUnderlined;
    return underlined;
  }

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

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const docNameFromRoute = String(routeParams.get('docName'));

    this.doc = docs.find((doc) => doc.name === docNameFromRoute);
  }
}
