import PO_608_1 from './Белоснежно матовый.webp'
import PO_608_2 from './Дуб винчестер трюфель.webp'
import PO_608_3 from './Шелл Грей.webp'

export const po_608_data = {
    id: 'po_608',
    URL: '/mezhkomnatnie/po_608',
    name: '608 ПО',
    photo: PO_608_3,
    price: 'от 9 140 ₽',
    types: [
        {
            photo: PO_608_1,   
            type: 'Белоснежно-матовый',
            price: '10 250 ₽',
            price_komplekt: '16 410 ₽'
        },
        {
            photo: PO_608_2,   
            type: 'Дуб винчестер трюфель',
            price: '9 140 ₽',
            price_komplekt: '14 750 ₽'
        },
        {
            photo: PO_608_3,   
            type: 'Шелл Грей',
            price: '10 250 ₽',
            price_komplekt: '16 410 ₽'
        },
    ]
}