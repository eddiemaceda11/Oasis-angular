import { Component } from '@angular/core';

const sidebarDataArray = [
  {
    title: 'Dashboard',
    selections: [
      {
        selection: 'Home',
        image: 'fa-solid fa-warehouse',
        path: 'home',
      },
    ],
  },
  {
    title: 'Pages',
    selections: [
      {
        selection: 'Tasks',
        image: 'fa-solid fa-money-check-dollar',
        path: 'tasks',
      },
      {
        selection: 'Tenants',
        image: 'fa-solid fa-user-tie',
        path: 'tenants',
      },
      {
        selection: 'Orders',
        image: 'fa-solid fa-bag-shopping',
        path: 'orders',
      },
    ],
  },
  {
    title: 'Apps',
    selections: [
      {
        selection: 'Calender',
        image: 'fa-solid fa-calendar-days',
        path: 'apps',
      },
      {
        selection: 'Themes',
        image: 'fa-solid fa-palette',
        path: 'themes',
      },
      {
        selection: 'Editor',
        image: 'fa-solid fa-pen-to-square',
        path: 'editor',
      },
    ],
  },
  {
    title: 'Charts',
    selections: [
      {
        selection: 'Line Chart',
        image: 'fa-solid fa-chart-line',
        path: 'line-chart',
      },
      {
        selection: 'Area Chart',
        image: 'fa-solid fa-chart-area',
        path: 'area-chart',
      },
      {
        selection: 'Bar Chart',
        image: 'fa-solid fa-chart-simple',
        path: 'bar-chart',
      },
    ],
  },
  {
    title: 'Support',
    selections: [
      {
        selection: 'Live Chat',
        image: 'fa-solid fa-headset',
        path: 'live-chat',
      },
      {
        selection: 'Email',
        image: 'fa-solid fa-envelope',
        path: 'email',
      },
    ],
  },
];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sidebarData = sidebarDataArray;
}
