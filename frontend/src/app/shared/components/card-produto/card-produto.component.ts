import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() foto: string;;
  @Input() nomeProduto: String;
  @Input() promocao: boolean;
  @Input() idProduto: string;
  @Input() dataValidade: string;
  @Input() valor: number;

  constructor() { }

  ngOnInit(): void {
  }

}
