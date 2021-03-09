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
  public balance: number
  public isMovements = false;
  public movement: any

  constructor(
    public mainServices: MainService,
  ) { }

  ngOnInit(): void {
    this.mainServices.getAccount().subscribe(data => {
      this.accounts = data
      this.accounts.forEach(element => {
        this.balance += element.balance
      });

    })
  }

  goToMovement(index) {
    this.isMovements = true;
    this.movement = this.accounts[index].movements
  }

  showAccounts() {
    this.isMovements = false
  }

}
