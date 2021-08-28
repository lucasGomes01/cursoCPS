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
    nome: null as any,
    validade: null as any,
    valor: null as any
  };

  constructor(private produtosService: ProdutosService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem('Sistema', `O produto ${this.produto.nome} foi cadastrado, Seu ID é ${this.produto.idProduto}`, 'toast-success');

      this.router.navigate(['/produtos']);
    });

  }

}
