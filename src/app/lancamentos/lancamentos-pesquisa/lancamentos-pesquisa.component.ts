import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30),
      dataPagamento: null, valor: '4.55', pessoa: 'Padaria do José' },
    {tipo: 'RECEITA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30),
      dataPagamento: null, valor: '4.55', pessoa: 'Padaria do José' },
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30),
      dataPagamento: null, valor: '4.55', pessoa: 'Padaria do José' },
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30),
      dataPagamento: null, valor: '4.55', pessoa: 'Padaria do José' },
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30),
      dataPagamento: null, valor: '4.55', pessoa: 'Padaria do José' },
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30),
      dataPagamento: null, valor: '4.55', pessoa: 'Padaria do José' },
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30),
      dataPagamento: null, valor: '4.55', pessoa: 'Padaria do José' }

  ];

}
