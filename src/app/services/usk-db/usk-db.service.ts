import { Injectable } from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from "angularfire2";

@Injectable()
export class UskDbService {

  baseUrl = `/uskudar/pages/`;

  constructor(private af: AngularFire) { }

  get(page: string, field: string) {
    return this.af.database.object(`${this.baseUrl}/${page}/${field}`);
  }

  update(page: string, field: string, value: string) {
    let o = {};
    o[field] = value;
    this.af.database.object(`${this.baseUrl}/${page}/`).update(o);
  }

}
