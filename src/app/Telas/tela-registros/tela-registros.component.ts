import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidacoesService } from 'src/app/Servicos/validacoes.service';
import { Registro, NovoRegistro} from 'src/app/Modelos/registro';
import { BackendService } from 'src/app/Servicos/backend.service';
import { Router } from '@angular/router';
import { UsuarioAtual } from 'src/app/Modelos/usuario';

@Component({
  selector: 'app-tela-registros',
  templateUrl: './tela-registros.component.html',
  styleUrls: ['./tela-registros.component.scss']
})
export class TelaRegistrosComponent implements OnInit {

  listaRegistros: Registro[];
  novoRegistro: FormGroup;
  user: UsuarioAtual;

  constructor(private fb: FormBuilder, private bs: BackendService, private route: Router) { }

  ngOnInit(): void {
    this.ApanharRegistros();
    this.AddRegistro();
    this.GetUsuario();
  }

  ApanharRegistros(){
    var userName = this.user.userName;
    this.bs.getRegistros(userName).subscribe(data =>{
      this.listaRegistros = data;
      this.recarregarPagina();
    });
  }

  GetUsuario(){
    return this.user = this.bs.PegarUsuario();
  }

  recarregarPagina() {
    window.location.reload();
  }

  SalvarRegistro(){
    if(this.novoRegistro.valid)
    {
    var registro: any = new FormData();
    var usuario: any = this.bs.PegarUsuario();

    registro.append("nivel", this.novoRegistro.get('nivel').value);
    registro.append("descricao", this.novoRegistro.get('descricao').value);
    registro.append("userName", usuario.userName);

    this.bs.postRegistro(registro);
    
    this.novoRegistro.reset();
    this.recarregarPagina();
    }
  }

  AddRegistro(){
    this.novoRegistro = this.fb.group({
      nivel: ['',
      Validators.compose([
        Validators.required,
        ValidacoesService.ValidaNivel
      ])
    ],
      descricao: ['',
      Validators.compose([
        Validators.required,
        Validators.maxLength(255)
      ])
    ]
    })
  }

  get nivel(){
    return this.novoRegistro.get('nivel')
  }
  get descricao(){
    return this.novoRegistro.get('descricao')
  }
}
