import { Component } from '@angular/core';
import { Doc, docs } from '../docs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  genDoc() {
    let newdoc = {} as Doc;
    let docname = prompt("Name of Document:", "");
    if (docname != null) {
      newdoc = {
        name: docname,
        docBarName: docname,
        body: "",
        isBold: false,
        isItalic: false,
        isUnderlined: false,
        fonttype: "Arial",
        fontsize: 11,
        fontcolor: "#000000",
        highlight: "none"
      };
      if (docname.length > 16) {
        newdoc.docBarName = newdoc.docBarName.substring(0, 13) + "...";
      }
      docs.push(newdoc);
    }
  }
}