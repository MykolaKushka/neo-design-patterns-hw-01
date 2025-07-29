import { Author } from './Author';

export abstract class AbstractBook {
  protected readonly title: string;
  protected readonly year: number;
  protected readonly author: Author;

  constructor(title: string, year: number, author: Author) {
    this.title = title;
    this.year = year;
    this.author = author;
  }

  getTitle(): string {
    return this.title;
  }

  getYear(): number {
    return this.year;
  }

  getAuthor(): Author {
    return this.author;
  }

  abstract getDescription(): string;
}
