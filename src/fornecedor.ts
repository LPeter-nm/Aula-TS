import { Produto } from "./produto";

class Fornecedor {
    codigoFornecedor: number;
    nome: string;
    ativo: boolean;
    documento: string;
    produto: Produto[];
    constructor(codigoFornecedor: number, nome: string, documento: string, produto: Produto) {
        this.codigoFornecedor = codigoFornecedor;
        this.nome = nome;
        this.documento = documento;
        this.ativo = false;
        this.produto= []
    }

    addProduto(produto: Produto): void{
        this.produto.push(produto)
    }

    listarProdutosFornecedor(): void{
        for(let i:number = 0; i<this.produto.length;i++){
            console.log("-------------------\n");
            console.log(`${i+1}º Produto`);
            console.log(`Código Produto:${this.produto[i].codigoProduto}`);
            console.log(`Descrição: ${this.produto[i].descricao}`);
            console.log(`Preço: R$ ${this.produto[i].preco}`)
            console.log(`Data Cadastro: ${this.produto[i].formatarData()}`)
        }
    }
}

export {Fornecedor} 