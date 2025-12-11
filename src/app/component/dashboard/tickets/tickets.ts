import { Component } from '@angular/core';
import { DashboardItem } from "../dashboard-item/dashboard-item";
import { NewTicket } from "../tickets/new-ticket/new-ticket";
@Component({
  selector: 'app-tickets',
  imports: [DashboardItem, NewTicket],
  standalone: true,
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {

}
