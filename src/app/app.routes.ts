import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPathComponent } from './not-found-path/not-found-path.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Home details',
    },
    {
        path: '**',
        component: NotFoundPathComponent,
        title: 'Home details',
      }
  ];
export default routes;
