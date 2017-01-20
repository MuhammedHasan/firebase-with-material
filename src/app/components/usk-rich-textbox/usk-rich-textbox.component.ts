import { Component, OnInit, Input } from '@angular/core';
import {UskDbService} from '../../services';

@Component({
  selector: 'usk-rich-textbox',
  templateUrl: './usk-rich-textbox.component.html',
  styleUrls: ['./usk-rich-textbox.component.css']
})
export class UskRichTextboxComponent implements OnInit {

  @Input() field: string;
  @Input() page: string;
  content = '';
  constructor(private db: UskDbService) { }

  ngOnInit() {
    this.db.get(this.page, this.field).subscribe(ss => { this.content = ss.$value });
  }

  update(value: string) {
    this.db.update(this.page, this.field, value);
  }
}
