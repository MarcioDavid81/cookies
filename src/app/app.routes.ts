import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';
import { BlogComponent } from './components/blog/blog.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'sobre',
        component: SobreComponent
    },
    {
        path: 'cardapio',
        component: CardapioComponent
    },
    {
        path: 'blog',
        component: BlogComponent,
    }
];
