import { Component } from '@angular/core';
import { activityFeedMessages } from '../../../../data/activityfeed';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.css'
})
export class QuickActionsComponent {
  readyToPost = false;
  updateTask = false;
  selectedValue: string = "";
 
  addUpdateMessage(value: string) {
    if (this.checkIfEmpty(value)) return;

    const newObject = {
      image: "test image",
      name: "test name",
      text: value,
      date: "test date",
      time: "test time"
    }

   activityFeedMessages.push(newObject);
  }

  toggleReadyToPost() {
    this.readyToPost = !this.readyToPost;
  }

  toggleUpdateTask() {
    this.updateTask = !this.updateTask;
  }

  closeAction() {
    this.updateTask = false;
    this.readyToPost = false;
  }

  checkIfEmpty(valueToCheck: string) {
    if(valueToCheck === "") {
      alert("Value cannot be empty");
      return true;
    }
    return false;
  }
}
