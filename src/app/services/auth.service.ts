import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public Islogin: boolean;

  constructor(
    private httpClient: HttpClient,
  ) { }


  public getUser(): Observable<any>{
    return this.httpClient.get("assets/users.json");
  }
}
