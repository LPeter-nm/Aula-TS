class Produto {
    codigoProduto: number;
    descricao: string;
    preco: number;
    ativo: boolean;
    dataCadastro: Date;
    constructor(codigoProduto: number, descricao: string, preco: number) {
        this.codigoProduto = codigoProduto;
        this.descricao = descricao;
        this.preco = preco;
        this.dataCadastro = new Date()
    }

    formatarData(): any{
        return `${this.dataCadastro.getDay()}/${this.dataCadastro.getMonth()}/${this.dataCadastro.getFullYear()}`
    }
}

export {Produto}