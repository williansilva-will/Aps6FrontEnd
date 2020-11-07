export class NovoUsuario {

    constructor(foto: File, nome: string, nivel: number, senha: string){
        this.foto = foto;
        this.nome = nome;
        this.nivel = nivel;
        this.senha = senha;
    }

    foto: File;
    nome: string;
    nivel: number;
    senha: string;
}

export class LoginUsuario {

    constructor(foto: File, nome: string, senha: string){
        this.foto = foto;
        this.nome = nome;
        this.senha = senha;
    }

    foto: File;
    nome: string;
    senha: string;
}

export class UsuarioAtual {

    constructor(userName: string, password: string){
        this.userName = userName;
        this.password = password;
    }

    userName: string;
    password: string;
}