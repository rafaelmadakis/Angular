import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {InputTextModule} from 'primeng/components/inputtext/inputtext'; 
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';

import { AppComponent } from './app.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PesquisaPessoasComponent } from './pesquisa-pessoas/pesquisa-pessoas.component';

import {PasswordModule} from 'primeng/components/password/password';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PesquisaPessoasComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    PasswordModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
