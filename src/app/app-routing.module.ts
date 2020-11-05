import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaCadastroComponent } from './Telas/tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './Telas/tela-login/tela-login.component';
import { TelaRegistrosComponent } from './Telas/tela-registros/tela-registros.component';

const routes: Routes = [
  { path: 'ministerioAmbiente/login', component: TelaLoginComponent},
  { path: 'ministerioAmbiente/cadastro', component: TelaCadastroComponent},
  { path: 'ministerioAmbiente/registros', component: TelaRegistrosComponent},
  { path: '', component: TelaLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
