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

export class Usuario {

    constructor(id: number, foto: File, nome: string, nivel: number, senha: string){
        this.id = id;
        this.foto = foto;
        this.nome = nome;
        this.nivel = nivel;
        this.senha = senha;
    }

    id: number;
    foto: File;
    nome: string;
    nivel: number;
    senha: string;
}