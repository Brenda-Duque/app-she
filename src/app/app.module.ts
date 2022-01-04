import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { AprovacoesComponent } from './aprovacoes/aprovacoes.component';
import { EntregasComponent } from './entregas/entregas.component';
import { TermosComponent } from './termos/termos.component';
import { HistoricoComponent } from './historico/historico.component';
import { routing } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent,
    SolicitarComponent,
    SolicitacoesComponent,
    AprovacoesComponent,
    EntregasComponent,
    TermosComponent,
    HistoricoComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
