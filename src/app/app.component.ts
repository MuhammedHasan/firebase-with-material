import { Component, OnInit } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  status;

  constructor(private af: AngularFire) { }

  ngOnInit() {
    this.af.auth.subscribe(x => {
      this.status = x != null;
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Redirect
    });
  }

  logout(){
    this.af.auth.logout();
  }

}
