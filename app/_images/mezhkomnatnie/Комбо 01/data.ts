import kombo01_byanko from './Бьянко.webp'
import kombo01_krem from './Крем.webp'

export const kombo01 = {
    id: 'kombo01',
    URL: '/mezhkomnatnie/kombo01',
    name: 'Комбо 01',
    photo: kombo01_byanko,
    price: 'от 18 980 ₽',
    types: [
        {
            photo: kombo01_byanko,   
            type: 'Бьянко',
            price: '18 980 ₽',
            price_komplekt: '28 092 ₽'
        },
        {
            photo: kombo01_krem,   
            type: 'Крем',
            price: '18 980 ₽',
            price_komplekt: '28 092 ₽'
        },
    ]
}