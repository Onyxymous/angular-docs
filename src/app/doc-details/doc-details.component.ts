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
    var bold = 'none';

    if (doc.isBold === true) {
      doc.isBold = false;
    } else {
      bold = 'bold';
      doc.isBold = true;
    }

    return bold;
  }

  updateItalic(doc: Doc) {
    var italic = 'none';

    if (doc.isItalic === true) {
      doc.isItalic = false;
    } else {
      italic = 'italic';
      doc.isItalic = true;
    }

    return italic;
  }

  updateUnderline(doc: Doc) {
    var underlined = 'none';

    if (doc.isUnderlined === true) {
      doc.isUnderlined = false;
    } else {
      underlined = 'underline';
      doc.isUnderlined = true;
    }

    return underlined;
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const docNameFromRoute = String(routeParams.get('docName'));

    this.doc = docs.find((doc) => doc.name === docNameFromRoute);

    if (this.doc) {
      var isBold = this.doc.isBold;
      var isItalic = this.doc.isItalic;
      var isUnderlined = this.doc.isUnderlined;
      var fonttype = this.doc.fonttype;
      var fontsize = this.doc.fontsize;
      var fontcolor = this.doc.fontcolor;
      var highlight = this.doc.highlight;
    }
  }
}
