import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const docNameFromRoute = String(routeParams.get('docName'));

    this.doc = docs.find((doc) => doc.name === docNameFromRoute);
  }
}
