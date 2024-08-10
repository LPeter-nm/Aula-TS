import { Cliente } from "./cliente";
import { Produto } from "./produto";
import { ItemPedido } from "./itemPedido";
import { Fornecedor } from "./fornecedor";
import { Endereco } from "./endereco";
import { Pedido } from "./pedido";

let itemPedido = new ItemPedido();

// Cliente
let cliente1 = new Cliente(1, "Lorivaldo", "123456");

// Produtos
let produto1 = new Produto(1, "arroz", 3)
let produto2 = new Produto(2, "feijão", 5);

// Fornecedor
let fornecedor1 = new Fornecedor(1, "Maria", "document", produto1);

// Endereço
let endereco1 = new Endereco(fornecedor1, "nameRua", "nomeBairro", "nomeCidade", "nomePaís", "cep");

// Pedido
let pedido = new Pedido(1, cliente1);

// Métodos
endereco1.addFornecedor(fornecedor1)
fornecedor1.addProduto(produto1)
itemPedido.addProduto(2, produto1)
pedido.addItem(itemPedido)

fornecedor1.addProduto(produto2);
itemPedido.addProduto(4, produto2);
pedido.addItem(itemPedido);

fornecedor1.listarProdutosFornecedor();
pedido.valorTotal();
