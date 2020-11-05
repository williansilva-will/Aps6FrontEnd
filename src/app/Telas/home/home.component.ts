import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/Servicos/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuarioAtual: any;

  constructor(private bs: BackendService) { }

  ngOnInit(): void {
    this.usuarioAtual = this.bs.PegarUsuario();
  }

  logout(){
    this.bs.Logout();
  }
}
