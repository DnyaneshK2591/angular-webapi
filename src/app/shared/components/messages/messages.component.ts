import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MessagesService } from './messages.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {
  showMessages = false;

  errors$: Observable<string[]> | undefined;

  constructor(public messagesService: MessagesService) {
    console.log('Created messages component');
  }

  ngOnInit() {
    this.errors$ = this.messagesService.errors$.pipe(
      tap(() => (this.showMessages = true))
    );

    interval(10000).subscribe(x => {
      this.onClose();
  });
  }

  onClose() {
    this.showMessages = false;
  }
}
