import { Component, OnInit } from '@angular/core';
import { tenants } from '../../../../data/tenants';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-info-widget',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-info-widget.component.html',
  styleUrl: './task-info-widget.component.css'
})
export class TaskInfoWidgetComponent implements OnInit {
  listOfTenants: any;

  ngOnInit(): void {
      this.listOfTenants = tenants
      console.log(this.listOfTenants)
  }
}
