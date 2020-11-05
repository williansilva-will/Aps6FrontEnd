export class NovoRegistro {

    constructor(descricao: string, nivel: number, userName: string){
        this.descricao = descricao;
        this.nivel = nivel;
        this.userName = userName;
    }

    descricao: string;
    nivel: number;
    userName: string
}

export class Registro {

    constructor(id: number, descricao: string, nivel: number, userName: string){
        this.id = id;
        this.descricao = descricao;
        this.nivel = nivel;
        this.userName = userName;
    }

    id: number;
    descricao: string;
    nivel: number;
    userName: string;
}