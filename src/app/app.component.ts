import {Component} from '@angular/core';
import {Card, CardTypes} from "./card";

@Component({
  selector: 'app-root',
  template:`
      <div class="container">
      <h1>Welcome to {{title}}!</h1>

      <ng-container *cardDeck="let card for cards;"></ng-container>
          
    </div>`,
  styles: []
})
export class AppComponent {
  title = 'IJS-dom';

  cards: Array<Card> = [
    {
      type: CardTypes.Plain,
      title: 'The title',
      text: 'The text',
    },
    {
      type: CardTypes.Primary,
      title: 'Primary card title',
      text: 'Primary text',
      header: 'Primary card header',
      smallText: 'Primary card small text',
    },
  ]

}
