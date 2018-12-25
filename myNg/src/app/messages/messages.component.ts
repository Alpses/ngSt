import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public MeS:MessageService) { }// 这个 messageService 属性必须是公共属性，因为你将会在模板中绑定到它。 Attention:Angular 只会绑定到组件的公共属性。

  ngOnInit() {
  }

}