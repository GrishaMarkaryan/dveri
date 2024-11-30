import granitPiano from '@/app/_images/metallicheskie/Гранит Пиано/Гранит Пиано.jpg';
import granitPianoBezPaneli from '@/app/_images/metallicheskie/Гранит Пиано/без панели.jpg'

import PO_538 from '@/app/_images/mezhkomnatnie/538 ПО/538 ПО.jpg'

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
        {
            id: 'granit-piano', 
            URL: '/metallicheskie/granit-piano',
            name:'Гранит Пиано',
            photo: granitPiano,
            price: 'от 34900 ₽',
            types: [
                {
                    name: 'Гранит Пиано',
                    photo: granitPianoBezPaneli,
                    color: 'БЕЗ ПАНЕЛИ',
                    price: '0 ₽',
                }
            ]
        },
    
    ],

    mezhkomnatnie: [
        {
            id: '538 ПО',
            URL: '/mezhkomnatnie/538 ПО',
            name: '538 ПО',
            photo: PO_538,
            price: 'от 10 640 ₽',
            types: [
                {
                name: '538 ПО',
                photo: PO_538,   
                color: 'Шелл Грей',
                price: 'от 10 640 ₽',
                },
            ]
        },
    ],
}