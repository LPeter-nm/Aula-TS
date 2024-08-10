class Cliente{
    codigoCliente: number;
    nomeCliente: string;
    cpfCliente: string;
    constructor(codigoCliente: number, nomeCliente: string, cpfCliente: string){
        this.codigoCliente = codigoCliente;
        this.nomeCliente = nomeCliente;
        this.cpfCliente = cpfCliente;
    }
}

export {Cliente}