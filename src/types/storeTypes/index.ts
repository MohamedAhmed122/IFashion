export type Stores = {
  _id: string;
  name: string;
  image: string;
  description: string;
  categories: Categories[];
};

export type Categories = {
  image: string;
  name: string;
  _id: string;
};
