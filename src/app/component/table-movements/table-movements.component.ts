import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-movements',
  templateUrl: './table-movements.component.html',
  styleUrls: ['./table-movements.component.css']
})
export class TableMovementsComponent implements OnInit {

  @Input() movement: Array<any>;
  @Output()showAccount = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  gotoBack() {
    this.showAccount.emit();
  }

}
