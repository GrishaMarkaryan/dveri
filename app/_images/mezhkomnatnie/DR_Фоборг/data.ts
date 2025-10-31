import Foborg_antichni_orekh from './Фоборг античный орех.webp'
import Foborg_emal_belaya from './Фоборг белая эмаль.webp'

export const DR_Foborg = {
    id: 'dr_foborg',
    URL: '/mezhkomnatnie/dr_foborg',
    name: 'Фоборг',
    photo: Foborg_emal_belaya,
    price: 'от 18 900 ₽',
    types: [
        {
            photo: Foborg_emal_belaya,   
            type: 'Фоборг эмаль белая',
            price: '21 300 ₽',
            price_komplekt: '29 775 ₽'
        },
        {
            photo: Foborg_antichni_orekh,   
            type: 'Фоборг античный орех',
            price: '18 900 ₽',
            price_komplekt: '27 375 ₽'
        },
    ]
}