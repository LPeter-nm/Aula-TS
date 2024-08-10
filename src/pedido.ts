import { ItemPedido } from "./itemPedido";
import { Cliente } from "./cliente";
import { HistoricoPedido } from "./historicoPedido";

class Pedido{
    codigoPedido: number;
    itemPedido: ItemPedido[];
    cliente: Cliente;
    historico: HistoricoPedido;
    constructor(codigoPedido: number, cliente: Cliente){
        this.codigoPedido = codigoPedido
        this.cliente = cliente
        this.itemPedido = []
        this.historico = new HistoricoPedido();
    }

    addItem(itemPedido: ItemPedido): void{
        this.itemPedido.push(itemPedido);
        this.historico.acao.push(itemPedido);
    }

    valorTotal(): void{
        let valorTotal:number = 0;

        for(let i=0; i<this.itemPedido.length;i++){
            valorTotal = valorTotal + (this.itemPedido[i].produto[i].preco*this.itemPedido[i].quantidade);
        }

        for(let i=0;i<this.itemPedido.length;i++){
            console.log(`---------------------Produto ${i+1}---------------------------`)
            console.log(`Nome do Produto: ${this.itemPedido[i].produto[i].descricao}`);
            console.log(`Preço do produto: ${this.itemPedido[i].produto[i].preco}`);
            console.log(`Quantidade: ${this.itemPedido[i].quantidade}`);
        }

        console.log('-------------------------------');
        console.log(`\n ---> Valor total do Pedido: ${valorTotal}`);
        console.log('-------------------------------');
    }
}

export {Pedido}