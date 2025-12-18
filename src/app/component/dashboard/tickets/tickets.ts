import { Component } from '@angular/core';
import { DashboardItem } from "../dashboard-item/dashboard-item";
import { NewTicket } from "../tickets/new-ticket/new-ticket";
import { Ticket as TicketModel } from '../tickets/ticket.model';
import { Ticket } from "./ticket/ticket";
@Component({
  selector: 'app-tickets',
  imports: [DashboardItem, NewTicket, Ticket],
  standalone: true,
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets: TicketModel[] = [];
  
  
  onAdd(ticketData: {title: string; request: string}) {
    const ticket: TicketModel = {
      id: Math.floor(Math.random() * 10000).toString(),
      title: ticketData.title,
      request: ticketData.request,
      status: 'open'
    };
    this.tickets = [...this.tickets, ticket];  
    }

  onCloseTicket (id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return {
          ...ticket,
          status: 'closed'
        };
      }
      return ticket;
    });
  }
}