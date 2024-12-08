import { granit_piano } from '../_images/metallicheskie/Пиано/data';
import { granit_piano_smart } from '../_images/metallicheskie/Пиано Смарт/data';

import { po_538_data } from '../_images/mezhkomnatnie/538 ПО/data';

import { StaticImageData } from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

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

    metallicheskie: [
        granit_piano,
        granit_piano_smart,
    
    ],

    mezhkomnatnie: [
        po_538_data,
    ],
}