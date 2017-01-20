import { Component, OnInit, Input } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from "angularfire2";
import {UskDbService} from '../../services';

@Component({
  selector: 'usk-textbox',
  templateUrl: './usk-textbox.component.html',
  styleUrls: ['./usk-textbox.component.css']
})
export class UskTextboxComponent implements OnInit {

  @Input() field: string;
  @Input() page: string;
  text;

  constructor(private db: UskDbService) { }

  ngOnInit() {
    this.db.get(this.page, this.field).subscribe(ss => { this.text = ss });
  }

  update(value: string) {
    this.db.update(this.page, this.field, value);
  }

}
