import { Component, OnInit } from '@angular/core';
import { Feedback } from '@app-data/feedback.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public feedback: Feedback = {};
  submitAttempted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  submitFeedback(form) {
    this.submitAttempted = true;

    if (form.valid) {
      alert(JSON.stringify(this.feedback));
    }
  }

}
