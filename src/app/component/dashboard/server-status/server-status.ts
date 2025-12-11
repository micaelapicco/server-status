import { Component } from '@angular/core';
import { DashboardItem } from "../dashboard-item/dashboard-item";

@Component({
  selector: 'app-server-status',
  imports: [DashboardItem],
  standalone: true,
  templateUrl: './server-status.html',
  styleUrl: './server-status.css',
})
export class ServerStatus {
  currentStatus = 'online';
}
