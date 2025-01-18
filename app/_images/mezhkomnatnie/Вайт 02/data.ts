import white02_dub from './Дуб патинированный.jpeg'
import white02_dub_steklo from './Дуб патинированный стекло.jpeg'
import white02_yasen from './Ясень айсберг.jpeg'
import white02_yasen_steklo from './Ясень айсберг стекло.jpeg'

export const white02 = {
    id: 'white02',
    URL: '/mezhkomnatnie/white02',
    name: 'Вайт 02',
    photo: white02_dub,
    price: 'от 16 220 ₽',
    types: [
        {
            photo: white02_dub,   
            type: 'Дуб патинированный',
            price: '20 340 ₽',
            price_komplekt: '30 285 ₽'
        },
        {
            photo: white02_dub_steklo,   
            type: 'Дуб патинированный стекло',
            price: '22 790 ₽',
            price_komplekt: '32 735 ₽'
        },
        {
            photo: white02_yasen,   
            type: 'Ясень айсберг',
            price: '16 220 ₽',
            price_komplekt: '26 165 ₽'
        },
        {
            photo: white02_yasen_steklo,   
            type: 'Ясень айсберг стекло',
            price: '18 540 ₽',
            price_komplekt: '28 485 ₽'
        },
    ]
}