import { Component, input, signal, output } from '@angular/core';
import { NewTicket } from "../new-ticket/new-ticket";
import { Ticket as TicketModel } from '../ticket.model';
@Component({
  selector: 'app-ticket',
  imports: [],
  standalone: true,
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
 data = input.required<TicketModel>();
 detailsVisible = signal(false);
close  = output();

 onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
  }

  onMarkAsClosed() {
    this.close.emit();
  }
}