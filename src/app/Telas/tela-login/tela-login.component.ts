import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidacoesService } from 'src/app/Servicos/validacoes.service';
import { BackendService } from 'src/app/Servicos/backend.service';
import { AuthService } from 'src/app/Servicos/auth.service';
import { Router } from '@angular/router';
import { NovoUsuario } from 'src/app/modelos/usuario';
import { Registro } from 'src/app/Modelos/registro';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {

  dadosLogin: FormGroup;

  constructor(private fb: FormBuilder, private bs: BackendService, private route: Router) { }

  ngOnInit(): void {
    this.CriarLogin();
  }

  Logar(){
    if(this.dadosLogin.valid){

      const login = new FormData()
      login.append("file", this.dadosLogin.get('foto').value);
      login.append("userName", this.dadosLogin.get('nome').value);
      login.append("password", this.dadosLogin.get('senha').value);

      console.log(login);

      this.bs.Login(login);
    }
  }
  
  uploadFile(event){
    const file = (event.target as HTMLInputElement).files[0];
    
    this.dadosLogin.patchValue({
      foto: file
    });
    this.dadosLogin.get('foto').updateValueAndValidity()
  }

  CriarLogin(){
    this.dadosLogin = this.fb.group({
      foto: [null, Validators.compose([Validators.required])],
      nome: ['',
      Validators.compose([
        Validators.required,
      ])
    ],
      senha: ['',
      Validators.compose([
        Validators.required,
      ])
    ]
    });
  }
}
