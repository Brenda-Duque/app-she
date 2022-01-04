import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { SolicitacoesComponent } from './solicitacoes/solicitacoes.component';
import { AprovacoesComponent } from './aprovacoes/aprovacoes.component';
import { EntregasComponent } from './entregas/entregas.component';
import { TermosComponent } from './termos/termos.component';
import { HistoricoComponent } from './historico/historico.component';

const APP_ROUTES: Routes = [
  { path: '', component: LoginComponent },
  { path: 'solicitar-epi', component: SolicitarComponent },
  { path: 'minhas-solicitacoes', component: SolicitacoesComponent },
  { path: 'aprovacoes-pendentes', component: AprovacoesComponent },
  { path: 'entregas-pendentes', component: EntregasComponent },
  { path: 'termos-pendentes', component: TermosComponent },
  { path: 'historico', component: HistoricoComponent },
];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(APP_ROUTES);
