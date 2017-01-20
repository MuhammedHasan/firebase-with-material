/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UskEditableTextComponent } from './usk-editable-text.component';

describe('UskEditableTextComponent', () => {
  let component: UskEditableTextComponent;
  let fixture: ComponentFixture<UskEditableTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UskEditableTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UskEditableTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
