import { AfterViewInit, Component, ElementRef,   OnInit,   output,   ViewChild } from '@angular/core';
import { Button } from "../../../../shared/button/button";
import { Control } from '../../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  imports: [Button, Control, FormsModule],
  standalone: true,
  templateUrl: './new-ticket.html',
  styleUrl: './new-ticket.css',
})
export class NewTicket implements OnInit, AfterViewInit{
  //Diferentes formas de usar ViewChild
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

 //Este funciona con signals
  //private form = viewChild<ElementRef<HTMLFormElement>>('form');

  add = output<{title: string; request: string}>();
     ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
 
  onSubmit(titleElement: string, ticketElement: string) {
    this.add.emit({
      title: titleElement,
      request: ticketElement,
    });


    this.form?.nativeElement.reset();  }
}
