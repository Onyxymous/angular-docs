import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doc, docs } from './docs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doc: Doc | undefined;
  constructor(private route: ActivatedRoute) {}
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/