import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

// public accounts
@Input() accounts;
@Input() type;
@Output() newItemEvent = new EventEmitter<string>();

  constructor(
    public mainServices: MainService,
  ) { }


  ngOnInit(): void {
  }


  viewDetail(value: string) {
    this.newItemEvent.emit(value);
  }

}
