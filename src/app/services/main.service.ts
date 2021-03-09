import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public balance = 0;
  public accounts: any;

  constructor(
    private httpClient: HttpClient,
    private firestore: AngularFirestore
  ) { 
    
  }

  public getUser(): Observable<any>{
    
    return this.httpClient.get("assets/users.json");
  }

  public getAccount(): Observable<any> {
    this.accounts = this.firestore.collection('accounts').valueChanges();
    return this.accounts
  }

  public createAccount(data) {
    return this.firestore.collection('accounts').add(data);
  }


  public getBalance() {

      
    console.log('balance', this.accounts)

  }

}
