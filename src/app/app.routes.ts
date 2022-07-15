import { Routes } from "@angular/router";

export const AppRotas: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    /*
    loadChildren é usado, neste caso, para acessar o componente de login somente
    quando for chamado esta rota. Assim evita-se de carregar todos os componentes ao
    iniciar o projeto
    */
    loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule)
  }
]
