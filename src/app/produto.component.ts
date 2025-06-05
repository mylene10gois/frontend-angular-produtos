import { Component, OnInit } from '@angular/core';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './produto.component.html',
  providers: [ProdutoService]
})
export class ProdutoComponent implements OnInit {
  produtos: Produto[] = [];
  novoProduto: Produto = {
    nome: '',
    descricao: '',
    preco: 0
  };

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.produtoService.getProdutos().subscribe(data => {
      this.produtos = data.content;
    });
  }

  salvarProduto(): void {
    if (this.novoProduto.id) {
      this.produtoService.updateProduto(this.novoProduto.id, this.novoProduto).subscribe(() => {
        this.listarProdutos();
        this.novoProduto = { nome: '', descricao: '', preco: 0 };
      });
    } else {
      this.produtoService.addProduto(this.novoProduto).subscribe(() => {
        this.listarProdutos();
        this.novoProduto = { nome: '', descricao: '', preco: 0 };
      });
    }
  }

  editarProduto(produto: Produto): void {
    this.novoProduto = { ...produto };
  }

  excluirProduto(id: number): void {
    this.produtoService.deleteProduto(id).subscribe(() => {
      this.listarProdutos();
    });
  }
}
