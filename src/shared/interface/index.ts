export interface BookState {
  isLoading?: boolean;
  topNewRelease?: [
    {
      title: string;
      author: string;
      cover_image: string;
      id: string;
      publisher: string;
      average_rating: string;
      price: number;
    },
  ];
  books?: [
    {
      title: string;
      author: string;
      cover_image: string;
      id: string;
      publisher: string;
      average_rating: string;
      price: number;
    },
  ];
  bookDetail?: {
    title: string;
    author: string;
    cover_image: string;
    id: string;
    page_count: string;
    publisher: string;
    synopsis: string;
    total_sale: string;
    average_rating: string;
    price: number;
    stock_available: string;
  };
}

export interface PayloadLogin {
  email: string;
  password: string;
}

export interface PayloadRegister {
  email: string;
  password: string;
  name: string;
}
