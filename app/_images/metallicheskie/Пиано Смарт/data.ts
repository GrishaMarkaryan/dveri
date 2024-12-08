import piano_smart from '@/app/_images/metallicheskie/Пиано Смарт/Пиано Смарт.png'; 
import piano_smart_000 from '@/app/_images/metallicheskie/Пиано Смарт/000.jpg'; 
import piano_smart_001 from '@/app/_images/metallicheskie/Пиано Смарт/001.jpg'; 
import piano_smart_002 from '@/app/_images/metallicheskie/Пиано Смарт/002.jpg'; 


export const granit_piano_smart = {
    id: 'granit_piano_smart', 
    URL: '/metallicheskie/granit_piano_smart',
    name:'Гранит Пиано Смарт',
    photo: piano_smart,
    price: 'от 34900 ₽',
    types: [
        {
            photo: piano_smart_000,
            type: '000',
            color: 'Без панели',
            price: '34 900 ₽',
        },
        {
            photo:  piano_smart_001,
            type: '001',
            color: 'Светлая',
            size: '6 мм',
            price: '36 900 ₽',
        },
        {
            photo:  piano_smart_002,
            type: '002',
            color: 'Темная',
            size: '6 мм',
            price: '36 900 ₽',
        },
    ]
}