import { Component, OnInit, Input } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from "angularfire2";

@Component({
  selector: 'usk-text-control',
  templateUrl: './usk-text-control.component.html',
  styleUrls: ['./usk-text-control.component.css']
})
export class UskTextControlComponent implements OnInit {

  @Input() field: string;
  @Input() page: string;
  baseUrl: string;

  text;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.baseUrl = `/uskudar/pages/${this.page}/`;
    this.af.database.object(`${this.baseUrl}/${this.field}`)
      .subscribe(ss => {
        this.text = ss;
      });
  }

  update(value: string) {
    let o = {};
    o[this.field] = value;
    this.af.database.object(this.baseUrl).update(o);
  }

}
