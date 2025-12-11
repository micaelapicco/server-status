import { Component } from '@angular/core';
import { Traffic } from './component/dashboard/traffic/traffic';
import { ServerStatus } from './component/dashboard/server-status/server-status';
import { Tickets } from './component/dashboard/tickets/tickets';
import { Header } from './component/header/header';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Traffic, ServerStatus, Tickets, Header],
  templateUrl: './app.html',
})
export class App {

  
}
