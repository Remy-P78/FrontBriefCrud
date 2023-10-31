import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Crée un BehaviorSubject pour gérer l'état de la connexion
  private isUserConnectedSubject = new BehaviorSubject<boolean>(false);

  // Crée un Observable pour permettre aux autres parties de l'application de suivre l'état de connexion.
  isUserConnected$ = this.isUserConnectedSubject.asObservable();

  constructor() {}

  setIsUserConnected(isConnected: boolean) {
    // Émet la nouvelle valeur (true ou false) dans l'observable.
    this.isUserConnectedSubject.next(isConnected);
  }
}
