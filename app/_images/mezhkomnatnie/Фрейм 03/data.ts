import frame03_dub from './Дуб.jpeg'
import frame03_dub_steklo from './Дуб стекло.jpeg'
import frame03_yasen from './Ясень Бисквит.jpeg'
import frame03_yasen_steklo from './Ясень Бисквит Стекло.jpeg'

export const frame03 = {
    id: 'frame03',
    URL: '/mezhkomnatnie/frame03',
    name: 'Фрейм 03',
    photo: frame03_dub,
    price: 'от 20 490 ₽',
    types: [
        {
            photo: frame03_dub,   
            type: 'Дуб',
            price: '23 120 ₽',
            price_komplekt: '33 065 ₽'
        },
        {
            photo: frame03_dub_steklo,   
            type: 'Дуб стекло',
            price: '27 420 ₽',
            price_komplekt: '37 365 ₽'
        },
        {
            photo: frame03_yasen,   
            type: 'Ясень Бисквит',
            price: '20 490 ₽',
            price_komplekt: '30 435 ₽'
        },
        {
            photo: frame03_yasen_steklo,   
            type: 'Ясень Бисквит стекло',
            price: '23 970 ₽',
            price_komplekt: '33 915 ₽'
        },
    ]
}