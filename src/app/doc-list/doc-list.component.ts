import { Component } from '@angular/core';

import { docs } from '../docs';

@Component({
  selector: 'app-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.css'],
})
export class DocListComponent {
  docs = docs;

  share() {
    window.alert('The doc has been shared!');
  }
}