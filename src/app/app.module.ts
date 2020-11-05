import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaCadastroComponent } from './Telas/tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './Telas/tela-login/tela-login.component';
import { TelaRegistrosComponent } from './Telas/tela-registros/tela-registros.component';
import { HomeComponent } from './Telas/home/home.component';
import { AuthInterceptor } from './Servicos/HTTPInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    TelaCadastroComponent,
    TelaLoginComponent,
    TelaRegistrosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
