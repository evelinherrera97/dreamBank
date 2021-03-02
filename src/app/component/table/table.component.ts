import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public array = [
     {
      'date': '23456',
      'description': 'hola que mas',
      'currency': 'usb',
      'value': 12.343,
      'balance': 1.234
     },
     {
      'date': '23456',
      'description': 'hola que mas',
      'currency': 'usb',
      'value': 12.343,
      'balance': 1.234
     },
     {
      'date': '23456',
      'description': 'hola que mas',
      'currency': 'usb',
      'value': 12.343,
      'balance': 1.234
     },
     {
      'date': '23456',
      'description': 'hola que mas',
      'currency': 'usb',
      'value': 12.343,
      'balance': 1.234
     },
     {
      'date': '23456',
      'description': 'hola que mas',
      'currency': 'usb',
      'value': 12.343,
      'balance': 1.234
     },
     {
      'date': '23456',
      'description': 'hola que mas',
      'currency': 'usb',
      'value': 12.343,
      'balance': 1.234
     }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
