import PO_601_1 from './Белоснежно матовый.jpg'
import PO_601_2 from './Дуб Серена керамика.jpg'
import PO_601_3 from './Медиум грей.jpg'


export const po_601_data = {
    id: 'po_601',
    URL: '/mezhkomnatnie/po_601',
    name: '601 ПО',
    photo: PO_601_2,
    price: 'от 9 140 ₽',
    types: [
        {
            photo: PO_601_1,   
            type: 'Белоснежно-матовый',
            price: '10 250 ₽',
            price_komplekt: '16 410 ₽'
        },
        {
            photo: PO_601_2,   
            type: 'Дуб Серена Керамика',
            price: '9 140 ₽',
            price_komplekt: '14 750 ₽'
        },
        {
            photo: PO_601_3,   
            type: 'Медиум Грей',
             price: '10 250 ₽',
            price_komplekt: '16 410 ₽'
        },
    ]
}