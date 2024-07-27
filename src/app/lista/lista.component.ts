import { ProdutoService } from './../produto.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  public produtos: any [] = []

  constructor(private produtoService: ProdutoService){}

  ngOnInit():void{
    this.listarProdutos();
  }

  listarProdutos() {
    this.produtoService.getProdutos().subscribe(
      produtosDaApi => {
        this.produtos = produtosDaApi
      }
    )
  }
}
