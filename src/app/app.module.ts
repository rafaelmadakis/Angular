import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { ButtonModule } from 'primeng/components/button/button';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { InputTextareaModule } from 'primeng/components/InputTextarea/inputtextarea';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule} from 'primeng/components/dropdown/dropdown';
import {InputMaskModule } from 'primeng/components/inputmask/inputmask';

import { AppComponent } from './app.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PesquisaPessoasComponent } from './pesquisa-pessoas/pesquisa-pessoas.component';


import { CurrencyMaskModule } from 'ng2-currency-mask';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';




@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    PesquisaPessoasComponent,
    LancamentoCadastroComponent,
    PessoaCadastroComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    CurrencyMaskModule,
    FormsModule,
    InputMaskModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
