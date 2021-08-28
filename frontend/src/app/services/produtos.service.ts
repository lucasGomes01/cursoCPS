import { IProduto } from './../model/IProduto.model';
import { HttpClient } from '@angular/Common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = 'http://localhost:3000/produtos'

  constructor(
    private HTTP: HttpClient,
    private toastr: ToastrService
  ) { }

  buscarTodos(): Observable<IProduto[]> {
    return this.HTTP.get<IProduto[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro())
    );
  }

  cadastrar(produto: IProduto): Observable<IProduto> {
    return this.HTTP.post<IProduto>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro())
    );
  }

  exibirErro(): Observable<any> {
    this.exibirMensagem('ERRO!', 'Não foi possivel realizar a operação', 'toast-erro');
    return EMPTY;
  }

  exibirMensagem(title: string, message: string, type: string): void {
    this.toastr.show(message, title, {
      closeButton: true,
      progressBar: true,
    }, type);
  }
}
