import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc, docs } from '../docs';

@Component({
  selector: 'app-doc-bar',
  templateUrl: './doc-bar.component.html',
  styleUrls: ['./doc-bar.component.css'],
})
export class DocBarComponent implements OnInit {
  doc: Doc | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const docNameFromRoute = String(routeParams.get('docName'));

    this.doc = docs.find(doc => doc.name === docNameFromRoute);
  }
}
