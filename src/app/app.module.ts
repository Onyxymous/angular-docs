import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { DocDetailsComponent } from './doc-details/doc-details.component';
import { DocBarComponent } from './doc-bar/doc-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: DocListComponent },
      { path: 'docs/:docName', component: DocDetailsComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    DocListComponent,
    DocDetailsComponent,
    DocBarComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }