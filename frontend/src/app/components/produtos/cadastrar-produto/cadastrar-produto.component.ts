import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/IProduto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  produto: IProduto = {
    nome: null,
    validade: null,
    valor: null
  };

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem('Sistema', `O produto ${this.produto.nome} foi cadastrado, Seu ID é ${this.produto.id}`, 'toast-success');

      this.router.navigate(['/produtos']);
    });

  }

}
