import { piano_data } from '../_images/metallicheskie/Пиано/data';
import { pianoSmart_data } from '../_images/metallicheskie/Пиано Смарт/data';

import { po_538_data } from '../_images/mezhkomnatnie/538 ПО/data';

import { StaticImageData } from 'next/image'

interface ProductType {
  name: string;
  photo: StaticImageData;
  color: string;
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

    metallicheskie: [
        piano_data,
        pianoSmart_data,
    
    ],

    mezhkomnatnie: [
        po_538_data
    ],
}