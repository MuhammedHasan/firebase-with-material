import { Component, OnInit, Input } from '@angular/core';
import {MdDialog} from '@angular/material';

import {UskDbService} from '../../services';
import {UskRichTextboxComponent} from '..'

@Component({
  selector: 'usk-editable-rich-text',
  templateUrl: './usk-editable-rich-text.component.html',
  styleUrls: ['./usk-editable-rich-text.component.css']
})
export class UskEditableRichTextComponent implements OnInit {

  @Input() field: string;
  @Input() page: string;
  baseUrl: string;
  content;

  constructor(private db: UskDbService, private dialog: MdDialog) { }

  ngOnInit() {
    this.db.get(this.page, this.field).subscribe(ss => { this.content = ss; });
  }

  edit() {
    let diologRef = this.dialog.open(UskRichTextboxComponent)
    diologRef.componentInstance.page = this.page;
    diologRef.componentInstance.field = this.field;
  }
}
