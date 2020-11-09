import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produtos/produto';
import { ProdutoService } from 'src/app/produtos/produtos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private produtoService : ProdutoService) { }

  public produtos: Produto[];
  ngOnInit(): void {
    this.produtoService.obterProduto()
    .subscribe(
      produtos => {
        this.produtos = produtos;
        console.log(produtos);
      },
      error => console.log(error)
    );
  };
}
