import piano from '@/app/_images/metallicheskie/Пиано/Пиано.jpg';
import piano_000 from '@/app/_images/metallicheskie/Пиано/000.jpg'
import piano_001 from '@/app/_images/metallicheskie/Пиано/001.jpg'


export const piano_data = {
    id: 'granit-piano', 
    URL: '/metallicheskie/granit-piano',
    name:'Гранит Пиано',
    photo: piano,
    price: 'от 34900 ₽',
    types: [
        {
            name: 'Гранит Пиано',
            photo: piano_000,
            color: '000 БЕЗ ПАНЕЛИ',
            price: '0 ₽',
        },
        {
            name: 'Гранит Пиано',
            photo: piano_001,
            color: '001',
            price: '0 ₽',
        }
    ]
}