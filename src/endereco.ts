import { Fornecedor } from "./fornecedor";
class Endereco{
    rua: string;
    bairro: string;
    cidade: string;
    pais: string;
    cep: string;
    fornecedor: Fornecedor;
    constructor(fornecedor: Fornecedor,rua: string, bairro: string, cidade: string, pais: string, cep: string){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.pais = pais
        this.cep = cep
        this.fornecedor = fornecedor
    }

    addFornecedor(fornecedor: Fornecedor): void{
        this.fornecedor = fornecedor;
    }
}

export {Endereco}