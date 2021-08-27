import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto : string = 'Curso de Angular';
  anuncio : string = `O ${this.nomeProduto} está em promoção!`;
  idProduto : number = 3;
  preco : number = 1.2;
  promocao : boolean = false;
  foto : string = 'assets/img/3.jpg';
  dataValidade = '2021-09-10';

  constructor() {
    console.log(this.nomeProduto)
  }

  ngOnInit(): void {
  }

}
