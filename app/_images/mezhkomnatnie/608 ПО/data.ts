import PO_608_1 from '@/app/_images/mezhkomnatnie/608 ПО/Белоснежно матовый.png'
import PO_608_2 from '@/app/_images/mezhkomnatnie/608 ПО/Дуб винчестер трюфель.png'
import PO_608_3 from '@/app/_images/mezhkomnatnie/608 ПО/Шелл Грей.jpg'

export const po_608_data = {
    id: 'po_608',
    URL: '/mezhkomnatnie/po_608',
    name: '608 ПО',
    photo: PO_608_1,
    price: 'от 10 640 ₽',
    types: [
        {
            photo: PO_608_1,   
            type: 'Белоснежно-матовый',
            price: 'от 10 640 ₽',
        },
        {
            photo: PO_608_2,   
            type: 'Дуб Серена Керамика',
            price: 'от 10 640 ₽',
        },
        {
            photo: PO_608_3,   
            type: 'Шелл Грей',
            price: 'от 10 640 ₽',
        },
    ]
}