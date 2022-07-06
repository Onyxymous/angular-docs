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
  savebody: Doc | undefined;
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

  updateColor(doc: Doc) {
    let color = prompt("Type in a Valid Hex Code:", doc.fontcolor);
    if (color != null) {
      if (color.length == 6) {
        color = color.toLowerCase();
        let isValid = true;
        for (let i = 0; i < 6; i++) {
          let decimal = color.charCodeAt(i);
          if (decimal < 48 || (decimal > 57 && decimal < 97) || decimal > 102) {
            isValid = false;
          }
        }

        if (isValid == false) {
          window.alert("ERROR: Enter in a valid hex code");
        } else {
          doc.fontcolor = "#" + color;
        }
      } else {
        window.alert("ERROR: Enter in a valid hex code");
      }
    }
  }

  updateHighlight(doc: Doc) {
    let color = prompt("Type in a Valid Hex Code:", doc.highlight);
    if (color != null) {
      if (color.length == 6) {
        color = color.toLowerCase();
        let isValid = true;
        for (let i = 0; i < 6; i++) {
          let decimal = color.charCodeAt(i);
          if (decimal < 48 || (decimal > 57 && decimal < 97) || decimal > 102) {
            isValid = false;
          }
        }

        if (isValid == false) {
          window.alert("ERROR: Enter in a valid hex code");
        } else {
          doc.highlight = "#" + color;
        }
      } else if (color == 'none') {
        doc.highlight = 'none';
      } 
    } else {
      window.alert("ERROR: Enter in a valid hex code");
    }
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const docNameFromRoute = String(routeParams.get('docName'));

    this.doc = docs.find((doc) => doc.name === docNameFromRoute);
    this.savebody = this.doc;
  }
}
