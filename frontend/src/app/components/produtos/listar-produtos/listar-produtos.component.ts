import { IProduto } from './../../../model/IProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {

  listaProduto : IProduto[] = []
  constructor(private produtosService: ProdutosService) {

  }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.buscarTodos().subscribe(retorno => {
      this.listaProduto = retorno;
    })
  }

  deletar(produto: IProduto): void {
    this.produtosService.excluir(produto.id).subscribe(() => {
      this.produtosService.exibirMensagem('Sistema', `O produto ${produto.nome} foi
      excluído`,'toast-error');
      this.carregarProdutos()
    });
} }
