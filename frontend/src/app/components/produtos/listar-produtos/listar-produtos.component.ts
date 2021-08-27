import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaString : string[] = ['Primeiro', 'Segundo', 'Terceiro']

  objetoModelo = {
    nome: 'Lucas',
    idade: '18',
    altura: '1.65',
    graduado: true
  }

  listaProduto : any[] = [
    {nome: 'Sapato', valor: 20, idProduto: 1, validade: '2021-09-09'},
    {nome: 'Relógio', valor: 25, idProduto: 2, validade: '2021-09-09'},
    {nome: 'Bolsa', valor: 30, idProduto: 3, validade: '2021-09-09'},
  ]
  constructor() {
    for (let item of this.listaString) {
      console.log(item);
    }

    console.log(this.objetoModelo)
  }

  ngOnInit(): void {
  }

}
