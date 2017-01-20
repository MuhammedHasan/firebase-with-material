import { Component, OnInit, Input } from '@angular/core';
import {MdDialog} from '@angular/material';

import {UskDbService} from '../../services';
import {UskTextboxComponent} from '..'

@Component({
  selector: 'usk-editable-text',
  templateUrl: './usk-editable-text.component.html',
  styleUrls: ['./usk-editable-text.component.css']
})
export class UskEditableTextComponent implements OnInit {

  @Input() field: string;
  @Input() page: string;
  baseUrl: string;
  text;

  constructor(private db: UskDbService, private dialog: MdDialog) { }

  ngOnInit() {
    this.db.get(this.page, this.field).subscribe(ss => { this.text = ss; });
  }

  edit() {
    let diologRef = this.dialog.open(UskTextboxComponent)
    diologRef.componentInstance.page = this.page;
    diologRef.componentInstance.field = this.field;
  }

}
