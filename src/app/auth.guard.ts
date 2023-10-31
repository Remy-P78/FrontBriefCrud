import { forwardRef, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { UtilisateurService } from './services/utilisateur.service';


export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(forwardRef(() => UtilisateurService));
  const router = inject(forwardRef(() => Router));

  if (authService.checkConnexion()) {
    return true;
  } else {
    alert("Veuillez vous connecter")
    router.navigate(['/accueil']);
    return false;
  }
};
