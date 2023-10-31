import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { TableModule } from 'primeng/table';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';


@NgModule({
  declarations: [AppComponent, ProduitsComponent, AccueilComponent, AddProduitComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
