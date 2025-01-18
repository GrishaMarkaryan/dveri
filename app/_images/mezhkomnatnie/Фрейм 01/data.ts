import frame01_derevo from './Красное дерево.jpeg'
import frame01_derevo_steklo from './Красное дерево стекло.jpeg'

export const frame01 = {
    id: 'frame01',
    URL: '/mezhkomnatnie/frame01',
    name: 'Фрейм 01',
    photo: frame01_derevo,
    price: 'от 19 460 ₽',
    types: [
        {
            photo: frame01_derevo,   
            type: 'Красное дерево',
            price: '19 460 ₽',
            price_komplekt: '29 405 ₽'
        },
        {
            photo: frame01_derevo_steklo,   
            type: 'Красное дерево стекло',
            price: '24 150 ₽',
            price_komplekt: '34 095 ₽'
        },
    ]
}