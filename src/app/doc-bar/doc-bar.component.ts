import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc, docs } from '../docs';

@Component({
  selector: 'app-doc-bar',
  templateUrl: './doc-bar.component.html',
  styleUrls: ['./doc-bar.component.css'],
})
export class DocBarComponent implements OnInit {
  fonts: string[];
  sizes: number[];
  sfont: string;
  ssize: number;
  @Input() doc: Doc | undefined;
  @Output() bold = new EventEmitter();
  @Output() italic = new EventEmitter();
  @Output() underline = new EventEmitter();
  @Output() color = new EventEmitter();
  @Output() highlight = new EventEmitter();
  constructor(private route: ActivatedRoute) {}

  updateFontType(doc: Doc, font: string) {
    doc.fonttype = font;
  }

  updateFontSize(doc: Doc, size: number) {
    doc.fontsize = size;
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

  renameDoc(doc: Doc) {
    let docname = prompt("New Name of Document:", doc.name);
    if (docname != null) {
      doc.name = docname;
      doc.docBarName = docname;
      if (docname.length > 16) {
        doc.docBarName = doc.docBarName.substring(0, 13) + "...";
      }
    }
  }



  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const docNameFromRoute = String(routeParams.get('docName'));

    this.doc = docs.find((doc) => doc.name === docNameFromRoute);

    this.fonts = [
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
    this.sizes = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];

    if (this.doc) {
      this.sfont = this.doc.fonttype;
      this.ssize = this.doc.fontsize;
    }
  }
}
