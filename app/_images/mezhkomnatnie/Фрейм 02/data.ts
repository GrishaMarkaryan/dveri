import frame02_dub from './Дуб.jpeg'
import frame02_dub_steklo from './Дуб стекло.jpeg'
import frame02_yasen from './Ясень айсберг.jpeg'

export const frame02 = {
    id: 'frame02',
    URL: '/mezhkomnatnie/frame02',
    name: 'Фрейм 02',
    photo: frame02_dub,
    price: 'от 19 460 ₽',
    types: [
        {
            photo: frame02_dub,   
            type: 'Дуб',
            price: '22 610 ₽',
            price_komplekt: '32 555 ₽'
        },
        {
            photo: frame02_dub_steklo,   
            type: 'Дуб стекло',
            price: '26 640 ₽',
            price_komplekt: '36 585 ₽'
        },
        {
            photo: frame02_yasen,   
            type: 'Ясень айсберг',
            price: '18 980 ₽',
            price_komplekt: '28 925 ₽'
        },
    ]
}