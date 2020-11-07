import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidacoesService } from 'src/app/Servicos/validacoes.service';
import { BackendService } from 'src/app/Servicos/backend.service';
import { Router } from '@angular/router';
import { NovoUsuario } from 'src/app/Modelos/usuario';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.scss']
})
export class TelaCadastroComponent implements OnInit {

  dadosUsuario: FormGroup;

  constructor(private fb: FormBuilder, private bs: BackendService, private route: Router) { }

  ngOnInit(): void {
    this.CriarNovoUsuario();
  }

  SalvarUsuario(){
  if(this.dadosUsuario.valid)
  {
    const usuario = new FormData();
    usuario.append('file', this.dadosUsuario.get('foto').value)
    usuario.append('userName', this.dadosUsuario.get('nome').value)
    usuario.append('member', this.dadosUsuario.get('nivel').value)
    usuario.append('password', this.dadosUsuario.get('senha').value)

    console.log(usuario);

    this.bs.postUsuario(usuario);
  }
  }

  uploadFile(event){
    const file = (event.target as HTMLInputElement).files[0];
    this.dadosUsuario.patchValue({
      foto: file
    });
    this.dadosUsuario.get('foto').updateValueAndValidity()
  }

  CriarNovoUsuario(){
    this.dadosUsuario = this.fb.group({
      foto: [null, Validators.compose([Validators.required])],
      nome: ['',
      Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(3),
      ])
    ],
      nivel: ['',
      Validators.compose([
        Validators.required,
        ValidacoesService.ValidaNivel,
      ])
    ],
      senha: ['',
      Validators.compose([
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(6),
      ])
    ],
      confirmarsenha: ['',
      Validators.compose([
        Validators.required,
        Validators.maxLength(12),
        Validators.minLength(6),
      ])
    ]
    }, {validator: ValidacoesService.SenhasCombinam});
  }

  get nome(){
    return this.dadosUsuario.get('nome')
  }

  get nivel(){
    return this.dadosUsuario.get('nivel')
  }

  get senha(){
    return this.dadosUsuario.get('senha')
  }

  get confirmarsenha(){
    return this.dadosUsuario.get('confirmarsenha')
  }
}
