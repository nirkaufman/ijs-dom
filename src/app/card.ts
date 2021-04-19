export enum CardTypes {
  Primary = 'Primary',
  Plain = 'Plain',
}

export interface Card {
  type: CardTypes,
  header?: string,
  title?: string,
  text?: string,
  smallText?: string,
}

export interface CardContext {
  $implicit: Card
}
