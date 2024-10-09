import { Routes } from '@angular/router';
import { LayoutComponent } from './Layout/layout/layout.component';
import { AirportTransferComponent } from './Layout/airport-transfer/airport-transfer.component';
import { MainComponent } from './Layout/main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'bracknellTaxis/main', pathMatch: 'full' },
  { path: 'bracknellTaxis/home', component: MainComponent },
  {
    path: 'bracknellTaxis/airportTransfer',
    component: AirportTransferComponent,
  },
];
