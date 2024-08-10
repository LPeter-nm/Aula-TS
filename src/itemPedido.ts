import { Produto } from "./produto";

class ItemPedido{
    quantidade: number;
    produto: Produto[];

    constructor(){
        this.quantidade = 0
        this.produto = []
    }

    addProduto(quantidade: number, produto: Produto): void{
        this.quantidade = quantidade;
        this.produto.push(produto);
    }
}

export {ItemPedido}