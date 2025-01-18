import white01_dub from './Дуб.jpeg'
import white01_dub_steklo from './Дуб стекло.jpeg'

export const white01 = {
    id: 'white01',
    URL: '/mezhkomnatnie/white01',
    name: 'Вайт 01',
    photo: white01_dub,
    price: 'от 19 790 ₽',
    types: [
        {
            photo: white01_dub,   
            type: 'Дуб',
            price: '19 790 ₽',
            price_komplekt: '29 735 ₽'
        },
        {
            photo: white01_dub_steklo,   
            type: 'Дуб стекло',
            price: '19 860 ₽',
            price_komplekt: '29 805 ₽'
        },
    ]
}