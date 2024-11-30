import { Component, OnInit } from '@angular/core';
import { activityFeedMessages } from '../../../../data/activityfeed';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activity-feed.component.html',
  styleUrl: './activity-feed.component.css'
})
export class ActivityFeedComponent implements OnInit {
  feedMessages: any;
  
  ngOnInit() {
    this.feedMessages = activityFeedMessages;
    console.log(this.feedMessages);
  }
}
