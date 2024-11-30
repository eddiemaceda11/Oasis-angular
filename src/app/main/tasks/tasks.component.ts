import { Component } from '@angular/core';
import { QuickActionsComponent } from './quick-actions/quick-actions.component';
import { ActivityFeedComponent } from "./activity-feed/activity-feed.component";
import { TaskInfoWidgetComponent } from "./task-info-widget/task-info-widget.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [QuickActionsComponent, ActivityFeedComponent, TaskInfoWidgetComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

}
