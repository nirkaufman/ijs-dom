import {
  ComponentFactoryResolver, ComponentRef,
  Directive,
  ElementRef,
  Injector,
  Input, OnInit, Renderer2,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {Card, CardTypes} from "./card";
import {CardComponent} from "./card.component";

@Directive({selector: '[cardDeck]'})
export class CardDeckDirective implements OnInit{
  @Input('cardDeckFor') cards: Array<Card>;
  @Input('cardDeckPrimary') primaryTemplate: TemplateRef<Card>;

  constructor(
      private cfr: ComponentFactoryResolver,
      private injector: Injector,
      private vcr: ViewContainerRef,
      private hostElement: ElementRef,
      private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    const parentNode = this.renderer.parentNode(this.hostElement.nativeElement);
    const wrapper = this.renderer.createElement('div');

    this.renderer.addClass(wrapper, 'card-deck');
    this.renderer.insertBefore(parentNode, wrapper, this.hostElement.nativeElement);
    this.renderer.removeChild(parentNode, this.hostElement.nativeElement);
    this.renderer.appendChild(wrapper, this.hostElement.nativeElement);

    const cardComponentFactory = this.cfr.resolveComponentFactory<CardComponent>(CardComponent);
    const cardsComponent: ComponentRef<CardComponent> = cardComponentFactory.create(this.injector);

    this.cards.forEach( card => {
      this.renderTemplate(card, cardsComponent.instance);
    } )
  }

  renderTemplate(card: Card, component: CardComponent) {
    switch (card.type) {
      case CardTypes.Plain:
        this.vcr.createEmbeddedView(component.plainCardTemplate, {$implicit: card});
        break;
      case CardTypes.Primary:
        this.vcr.createEmbeddedView(component.primaryCardTemplate, {$implicit: card});
        break;
    }
  }



}
