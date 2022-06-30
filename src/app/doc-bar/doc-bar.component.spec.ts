import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocBarComponent } from './doc-bar.component';

describe('DocBarComponent', () => {
  let component: DocBarComponent;
  let fixture: ComponentFixture<DocBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
