import strato01_tonirovanni from './Тонированный черный дуб.jpeg'
import strato01_yasen from './Ясень айсберг.jpeg'

export const strato01 = {
    id: 'strato01',
    URL: '/mezhkomnatnie/strato01',
    name: 'Страто 01',
    photo: strato01_tonirovanni,
    price: 'от 16 550 ₽',
    types: [
        {
            photo: strato01_tonirovanni,   
            type: 'Тонированный черный дуб',
            price: '16 820 ₽',
            price_komplekt: '26 765 ₽'
        },
        {
            photo: strato01_yasen,   
            type: 'Ясень айсберг',
            price: '16 550 ₽',
            price_komplekt: '26 495 ₽'
        },
    ]
}