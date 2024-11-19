import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, TasksComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
