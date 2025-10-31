import strato02_tonirovanni from './Тонированный черный дуб.webp'
import strato02_yasen from './Ясень айсберг.webp'

export const strato02 = {
    id: 'strato02',
    URL: '/mezhkomnatnie/strato02',
    name: 'Страто 02',
    photo: strato02_tonirovanni,
    price: 'от 17 490 ₽',
    types: [
        {
            photo: strato02_tonirovanni,   
            type: 'Тонированный черный дуб',
            price: '17 750 ₽',
            price_komplekt: '23 405 ₽'
        },
        {
            photo: strato02_yasen,   
            type: 'Ясень айсберг',
            price: '17 490 ₽',
            price_komplekt: '27 435 ₽'
        },
    ]
}