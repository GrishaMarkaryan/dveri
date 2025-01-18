import frame07_byanko from './Бьянко.jpeg'
import frame07_byanko_steklo from './Бьянко стекло.jpeg'
import frame07_krem from './Крем.jpeg'
import frame07_krem_steklo from './Крем стекло.jpeg'

export const frame07 = {
    id: 'frame07',
    URL: '/mezhkomnatnie/frame07',
    name: 'Фрейм 07',
    photo: frame07_byanko,
    price: 'от 20 360 ₽',
    types: [
        {
            photo: frame07_byanko,   
            type: 'Бьянко',
            price: '20 360 ₽',
            price_komplekt: '29 472 ₽'
        },
        {
            photo: frame07_byanko_steklo,   
            type: 'Бьянко стекло',
            price: '22 910 ₽',
            price_komplekt: '32 022 ₽'
        },
        {
            photo: frame07_krem,   
            type: 'Крем',
            price: '20 360 ₽',
            price_komplekt: '29 472 ₽'
        },
        {
            photo: frame07_krem_steklo,   
            type: 'Крем стекло',
            price: '22 910 ₽',
            price_komplekt: '32 022 ₽'
        },
    ]
}