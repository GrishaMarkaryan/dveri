import { StaticImageData } from 'next/image';
import { metallicheskie } from './metallicheskie';
import { mezhkomnatnie } from './mezhkomnatnie';

interface ProductType {
  photo: StaticImageData | any; // исправить тут any
  type: string;
  color?: string;
  size?: string;
  price: string;
}

export interface Product {
  id: string;
  URL: string;
  name: string;
  photo: StaticImageData;
  price: string;
  types?: ProductType[];
}

type AllProducts = {
    [key: string]: Product[];
}

export const allProducts: AllProducts = {
    metallicheskie: metallicheskie,
    mezhkomnatnie: mezhkomnatnie ,
}