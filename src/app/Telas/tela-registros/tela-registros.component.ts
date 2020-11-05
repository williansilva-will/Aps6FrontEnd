import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidacoesService } from 'src/app/Servicos/validacoes.service';
import { Registro, NovoRegistro} from 'src/app/Modelos/registro';
import { BackendService } from 'src/app/Servicos/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-registros',
  templateUrl: './tela-registros.component.html',
  styleUrls: ['./tela-registros.component.scss']
})
export class TelaRegistrosComponent implements OnInit {

  listaRegistros: Registro[];
  novoRegistro: FormGroup;

  constructor(private fb: FormBuilder, private bs: BackendService, private route: Router) { }

  ngOnInit(): void {
    this.ApanharRegistros();
    this.AddRegistro();
  }

  ApanharRegistros(){
    this.bs.getRegistros().subscribe(data =>{
      this.listaRegistros = data;
      this.recarregarPagina();
    });
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
    
    alert(`O registro foi cadastrado com sucesso. \n Dados: ${JSON.stringify(registro)}`);
    console.log(registro.get("descricao"));

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
