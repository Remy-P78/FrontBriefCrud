import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  isConnected: boolean = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    console.log('services', email, password);
    return this.http
      .post<{ access_token: string; id: string; nom: string }>(
        'http://localhost:3000/api/auth/login',
        { email, password }
      )
      .pipe(
        tap((response) => {
          localStorage.setItem('access_token', response.access_token);
        })
      );
  }

  checkConnexion(): boolean {
    this.isConnected = !!localStorage.getItem('access_token');
    return this.isConnected;
  }
}
