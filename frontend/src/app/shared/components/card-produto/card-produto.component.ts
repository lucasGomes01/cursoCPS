import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() foto: string;;
  @Input() nomeProduto: String = null as any;
  @Input() promocao: boolean = null as any;
  @Input() idProduto: string = null as any;
  @Input() dataValidade: string = null as any;
  @Input() valor: number = null as any;

  constructor() { }

  ngOnInit(): void {
  }

}
