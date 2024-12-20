import { granit_piano } from '../_images/metallicheskie/Пиано/data';
import { granit_piano_smart } from '../_images/metallicheskie/Пиано Смарт/data';
import { granit_7024 } from '../_images/metallicheskie/7024/data';
import { granit_geometriya } from '../_images/metallicheskie/Геометрия/data';
import { granit_gorizont } from '../_images/metallicheskie/Горизонт/data';
import { granit_gross } from '../_images/metallicheskie/Гросс/data';
import { granit_Dacha } from '../_images/metallicheskie/Дача/data';
import { granit_izoterma } from '../_images/metallicheskie/Изотерма/data';
import { granit_kontinent } from '../_images/metallicheskie/Континент/data';
import { granit_lira } from '../_images/metallicheskie/Лира/data';
import { granit_m1 } from '../_images/metallicheskie/М1/data';
import { granit_m2 } from '../_images/metallicheskie/М2/data';
import { granit_m2_lyuks } from '../_images/metallicheskie/М2 Люкс/data';
import { granit_m3 } from '../_images/metallicheskie/М3/data';
import { granit_m8 } from '../_images/metallicheskie/М8/data';
import { granit_piano_belaya } from '../_images/metallicheskie/Пиано Белая/data';
import { granit_c7 } from '../_images/metallicheskie/С7/data';
import { granit_c9 } from '../_images/metallicheskie/С9/data';
import { granit_senator } from '../_images/metallicheskie/Сенатор/data';

import { po_538_data } from '../_images/mezhkomnatnie/538 ПО/data';

import { StaticImageData } from 'next/image'

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
        granit_7024,
        granit_geometriya,
        granit_gorizont,
        granit_gross,
        granit_Dacha,
        granit_izoterma,   
        granit_kontinent, 
        granit_lira,
        granit_m1,
        granit_m2,
        granit_m2_lyuks,
        granit_m3,
        granit_m8,
        granit_piano_belaya,
        granit_c7,
        granit_c9,
        granit_senator,
    ],

    mezhkomnatnie: [
        po_538_data,
    ],
}