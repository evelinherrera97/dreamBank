import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accounts
  public balance = 0;
  public isMovements = false;
  public movement: any;
  public accountName: string

  constructor(
    public mainServices: MainService,
  ) { }

  ngOnInit(): void {
    this.mainServices.getAccount().subscribe(data => {
      this.accounts = data
      this.accounts.forEach(element => {
        if (element.status === 'active') {
          this.balance += +element.balance
        }
      });

    })
  }

  goToMovement(index) {
    if (this.accounts[index].movements.length !== 0) {
      this.isMovements = true;
      this.movement = this.accounts[index].movements
      this.accountName = `${this.accounts[index].accountNumber} - ${this.accounts[index].accountName}`
    }
  }

  showAccounts() {
    this.isMovements = false
  }

}
