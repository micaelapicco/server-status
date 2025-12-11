import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  imports: [],
  standalone: true,
  templateUrl: './dashboard-item.html',
  styleUrl: './dashboard-item.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'dashboard-item' }
})
export class DashboardItem {
 @Input({required:true}) image!: {src: string; alt: string};
 @Input({required:true}) title!: string;
 
}
