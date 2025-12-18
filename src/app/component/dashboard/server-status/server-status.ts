import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardItem } from "../dashboard-item/dashboard-item";

@Component({
  selector: 'app-server-status',
  imports: [DashboardItem, CommonModule],
  standalone: true,
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus {
currentStatus =signal<'online' | 'offline' | 'unknown'>('online');
constructor() {  
  
  setInterval(() => {
    const rand = Math.random();
    if (rand < 0.4) {
      this.currentStatus.set('online');
    } else if (rand < 0.8) {
      this.currentStatus.set('offline');
    } else {
      this.currentStatus.set('unknown');
    }
       console.log('Status actual:', this.currentStatus);
    }, 5000);
  } 
}


