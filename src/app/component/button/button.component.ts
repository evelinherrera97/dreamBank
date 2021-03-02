import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()label: string;
  @Input()type: string;
  @Output() submit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public validate() {
    this.submit.emit();
  }

}
