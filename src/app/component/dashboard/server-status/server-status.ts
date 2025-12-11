import { Component, OnInit } from '@angular/core';
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
currentStatus = 'online'
constructor() {  
  
  setInterval(() => {
    const rand = Math.random();
    if (rand < 0.4) {
      this.currentStatus = 'online';
    } else if (rand < 0.8) {
      this.currentStatus = 'offline';
    } else {
      this.currentStatus = 'unknown';
    }
       console.log('Status actual:', this.currentStatus);
    }, 5000);
  } 
}


