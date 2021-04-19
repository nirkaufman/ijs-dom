import {Component, TemplateRef, ViewChild} from '@angular/core';
import {CardContext} from "./card";

@Component({
  selector: 'app-card',
  template: `
      <ng-template #plainCard let-card>
          <div class="card">
              <div class="card-body">
                  <h5 class="card-title">{{ card.title }}</h5>
                  <p class="card-text">{{ card.text }}</p>
              </div>
          </div>
      </ng-template>

      <ng-template #primaryCard let-card>
          <div class="card border-primary">
              <div class="card-header">{{ card.header }}</div>
              <div class="card-body">
                  <h5 class="card-title">{{ card.title }}</h5>
                  <p class="card-text">{{ card.text }}</p>
              </div>
          </div>
      </ng-template>
  `,
})
export class CardComponent {
  @ViewChild('plainCard', {static: true}) plainCardTemplate: TemplateRef<CardContext>;
  @ViewChild('primaryCard', {static: true}) primaryCardTemplate: TemplateRef<CardContext>;
}
