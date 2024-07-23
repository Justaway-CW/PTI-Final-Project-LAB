import { Injectable } from '@angular/core';
import { SignInData } from '../model/signInData';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{

  private readonly mockUser: SignInData = new SignInData('admin', 'admin');
  isAuthenticated = false;
  
  sessioncheck(){
      this.isAuthenticated = true;
      this.router.navigate(['blog']);
  }

  constructor(private router: Router) { }

  authenticate(signInData: SignInData): boolean {
    if (this.checkCredentials(signInData)) {
      this.isAuthenticated = true;
      this.router.navigate(['blog']);
      localStorage.setItem("admin","admin");
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  private checkCredentials(signInData: SignInData): boolean {
    
    return this.checkLogin(signInData.getLogin()) && this.checkPassword(signInData.getPassword());
  }

  private checkLogin(login: string): boolean {
    return login === this.mockUser.getLogin();
  }

  private checkPassword(password: string): boolean {
    return password === this.mockUser.getPassword();
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['news']);
    localStorage.clear();
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}
