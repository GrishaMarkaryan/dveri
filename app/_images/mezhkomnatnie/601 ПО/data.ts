import PO_601_1 from '@/app/_images/mezhkomnatnie/601 ПО/Белоснежно матовый.jpg'
import PO_601_2 from '@/app/_images/mezhkomnatnie/601 ПО/Дуб Серена керамика.jpg'
import PO_601_3 from '@/app/_images/mezhkomnatnie/601 ПО/Медиум грей.jpg'


export const po_601_data = {
    id: 'po_601',
    URL: '/mezhkomnatnie/po_601',
    name: '601 ПО',
    photo: PO_601_2,
    price: 'от 10 640 ₽',
    types: [
        {
            photo: PO_601_1,   
            type: 'Белоснежно-матовый',
            price: 'от 10 640 ₽',
        },
        {
            photo: PO_601_2,   
            type: 'Дуб Серена Керамика',
            price: 'от 10 640 ₽',
        },
        {
            photo: PO_601_3,   
            type: 'Медиум Грей',
            price: 'от 10 640 ₽',
        },
    ]
}