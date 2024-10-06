import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/shared/components/messages/messages.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(public messages: MessagesService) {}
  ngOnInit(): void {
    const message = "Could not load courses";
    this.messages.showErrors(message);
  }
}
