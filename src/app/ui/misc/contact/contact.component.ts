import { Component, OnInit } from '@angular/core';
import { Feedback } from '@app-data/feedback.model';
import { DataSource } from '@app-data/data.source';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public feedback: Feedback = {};
  submitAttempted: boolean = false;
  feedbackSent: boolean = false;

  constructor(private dataSource: DataSource) { }

  ngOnInit() {
  }

  submitFeedback(form) {
    this.submitAttempted = true;

    if (form.valid) {
      this.dataSource.sendFeedback(this.feedback)
      .subscribe(feedback => {
        this.feedbackSent = true;
        this.submitAttempted = false;
      });
    }
  }

}
