import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() foto: string = " ";
  @Input() nomeProduto: string = " ";
  @Input() promocao: boolean = false;
  @Input() idProduto: string = " ";
  @Input() dataValidade: string = " ";
  @Input() preco: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
