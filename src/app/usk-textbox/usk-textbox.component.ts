import { Component, Input } from '@angular/core';

@Component({
  selector: 'usk-textbox',
  templateUrl: './usk-textbox.component.html',
  styleUrls: ['./usk-textbox.component.css']
})
export class UskTextboxComponent {
  @Input() field: string;
  @Input() page: string;
}
