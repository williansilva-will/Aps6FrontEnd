import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class ValidacoesService {

  constructor() { }

  static ValidaNivel(Nivel: AbstractControl){
    const nivel = Nivel.value;
    let valido: Boolean;

    if(nivel != 1 && nivel != 2 && nivel != 3){
       valido = false;
    }

    if(valido == false){
      return { nivelInvalido:true};
    }
    else {
      return null;
    }
  }

  static SenhasCombinam(senhas: AbstractControl){
    let senha = senhas.get('senha').value;
    let confirmarsenha = senhas.get('confirmarsenha').value;

    if(senha === confirmarsenha) {
      return null
    }
    else {
      senhas.get('confirmarsenha').setErrors({ naoCombinam:true });
    }
  }
}
