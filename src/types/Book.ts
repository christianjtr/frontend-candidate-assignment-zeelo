import { GenreCollection } from '@app/domain/Book';

export namespace BookAPIResponse {
  export interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
    cover_url: string;
    genres: GenreCollection<string>;
    description: string;
  }

  export interface GenericResponse<T> {
    message: string;
    isSuccess: boolean;
    data?: T;
  }
}

export namespace BookAPIRequest {
  export interface Book {
    title: string;
    author: string;
    price: number;
    cover_url?: string;
    genres?: GenreCollection<string>;
    description?: string;
  }
}
