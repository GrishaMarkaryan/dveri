import piano from '@/app/_images/metallicheskie/Пиано/Пиано.jpg';
import piano_000 from '@/app/_images/metallicheskie/Пиано/000.jpg'
import piano_001 from '@/app/_images/metallicheskie/Пиано/001.jpg'


export const granit_piano = {
    id: 'granit_piano', 
    URL: '/metallicheskie/granit_piano',
    name:'Гранит Пиано',
    photo: piano,
    price: 'от 34900 ₽',
    types: [
        {
            photo: piano_000,
            type: '000 ()',
            color: 'Без панели',
            size: '6 мм',
            price: '0 ₽',
        },
        {
            photo: piano_001,
            type: '001 (6 мм)',
            color: 'Светлая',
            size: '6 мм',
            price: '0 ₽',
        }
    ]
}