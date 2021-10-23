import {ShoppingItem} from 'screens/ShoppingItemsScreen';
import {Category} from 'screens/StoreScreen';

export const cartItems = [
  {
    id: '1',
    name: ' Women Black Suit',
    image: require('assets/Image/suit.jpg'),
    description: 'Lorem ipsum is a placeholder text commonly',
    isLiked: false,
    price: 100,
  },

  {
    id: '3',
    name: 'Whit T-shit ',
    image: require('assets/Image/t-shirt.jpg'),
    description: 'Lorem ipsum is a placeholder text commonly',
    isLiked: true,
    price: 50,
  },
  {
    id: '4',
    name: 'White Sweat Shirt ',
    image: require('assets/Image/sweatShirt.jpg'),
    description: 'Lorem ipsum is a placeholder text commonly',
    isLiked: false,
    price: 85,
  },
  {
    id: '2',
    name: 'Jeans For Woman ',
    image: require('assets/Image/jeans.jpg'),
    description: 'Lorem ipsum is a placeholder text commonly',
    isLiked: true,
    price: 125,
  },
];

export const favorites = [
  {
    id: '2',
    name: 'Jeans For Woman ',
    image: require('assets/Image/jeans.jpg'),
    description: 'Lorem ipsum is a placeholder text commonly',
    isLiked: true,
    price: 125,
  },
  {
    id: '1',
    name: ' Women Black Suit',
    image: require('assets/Image/suit.jpg'),
    description: 'Lorem ipsum is a placeholder text commonly',
    isLiked: false,
    price: 100,
  },

  {
    id: '4',
    name: 'White Sweat Shirt ',
    image: require('assets/Image/sweatShirt.jpg'),
    description: 'Lorem ipsum is a placeholder text commonly',
    isLiked: false,
    price: 85,
  },
  {
    id: '3',
    name: 'Whit T-shit ',
    image: require('assets/Image/t-shirt.jpg'),
    description: 'Lorem ipsum is a placeholder text commonly',
    isLiked: true,
    price: 50,
  },
];

export const items = [
  {
    title: 'Upcoming Show Live from Paris',
    subtitle: 'SPRING-SUMMER 2021',
    picture: require('assets/Image/chanel.jpg'),
  },
  {
    title: 'In Boutiques',
    subtitle: 'FALL-WINTER 2020/21',
    picture: require('assets/Image/sonnie-hiles-pU4J5VFnqCQ-unsplash-with-gradient.jpg'),
  },
  {
    title: 'Deauville Film Festival',
    subtitle: 'CHANEL IN CINEMA',
    picture: require('assets/Image/laura-chouette-NFrPPyGe5q0-unsplash-with-gradient.jpg'),
  },
  {
    title: 'IN BOUTIQUES',
    subtitle: "Métiers d'art 2019/20",
    picture: require('assets/Image/butsarakham-buranaworachot-au6Gddf1pZQ-unsplash.jpg'),
  },
  {
    title: 'Haute Couture',
    subtitle: 'FALL-WINTER 2020/21',
    picture: require('assets/Image/khaled-ghareeb-upepKTbwm3A-unsplash.jpg'),
  },
  {
    title: 'Balade en Méditerranée',
    subtitle: 'CRUISE 2020/21',
    picture: require('assets/Image/christopher-campbell-A3QXXEfcA1U-unsplash.jpg'),
  },
  {
    title: 'Spring-Summer 2020 Campaign',
    subtitle: 'EYEWEAR',
    picture: require('assets/Image/chase-fade-Pb13EUxzMDw-unsplash.jpg'),
  },
];

export const reviews = [
  {
    id: 2,
    type: '😡',
    color: '#800000',
  },
  {
    id: 1,
    type: '😂',
    color: 'orange',
  },
  {
    id: 3,
    type: '😇',
    color: '#63cdfa',
  },
];

export const categories: Category[] = [
  {
    id: 0,
    categoryTitle: 'Shirts',
    CategoryImage:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 1,
    categoryTitle: 'T-shirts',
    CategoryImage:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
  },
  {
    id: 2,
    categoryTitle: 'Jeans',
    CategoryImage:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 3,
    categoryTitle: 'Jackets',
    CategoryImage:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
  },
  {
    id: 4,
    categoryTitle: 'Shoes',
    CategoryImage:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  },
];
export const shoppingItems: ShoppingItem[] = [
  {
    id: 0,
    itemName: 'Shirts',
    itemPrice: 100,
    currency: 'USD',
    itemImage:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 1,
    itemName: 'Shirts',
    itemPrice: 100,
    currency: 'USD',
    itemImage:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 2,
    itemName: 'Shirts',
    itemPrice: 100,
    currency: 'USD',
    itemImage:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 3,
    itemName: 'Shirts',
    itemPrice: 100,
    currency: 'USD',
    itemImage:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
];
