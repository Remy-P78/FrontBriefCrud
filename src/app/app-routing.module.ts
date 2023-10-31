import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './pages/produits/produits.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'produit', component: ProduitsComponent },
  { path: 'addProduit', component: AddProduitComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
