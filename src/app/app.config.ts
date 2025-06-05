import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ProdutoComponent } from './produto.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      {
        path: '',
        component: ProdutoComponent,
        pathMatch: 'full'
      }
    ])
  ]
};

