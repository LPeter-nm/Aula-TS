class HistoricoPedido{
    acao: any[];

    constructor(){
        this.acao = [];
    }

    imprimirAcao(): void{
        for(let i:number = 0; i<this.acao.length;i++){
            console.log("----------------------------------------\n");
            console.log(`${i+1}° ação foi: ${this.acao}`);
        }
    }
}

export {HistoricoPedido}