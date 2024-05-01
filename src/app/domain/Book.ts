import BaseEntity from './BaseEntity';

interface GenreCollection<T> {
  length: 3;
  [index: number]: T;
}
export default class Book extends BaseEntity {
  title?: string = '';
  author?: string = '';
  price?: number = 0;
  coverUrl?: string = '';
  genres?: GenreCollection<string>;
  description?: string = '';

  constructor(
    id: number,
    title: string,
    author: string,
    price: number,
    cover_url?: string,
    genres?: GenreCollection<string>,
    description?: string,
  ) {
    super(id);

    this.title = title;
    this.author = author;
    this.price = price;
    this.coverUrl = cover_url;
    this.genres = genres;
    this.description = description;
  }
}
