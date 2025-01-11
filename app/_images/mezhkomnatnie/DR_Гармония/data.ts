import Garmoniya_antichni_orekh from './Гармония античный орех.jpg'
import Garmoniya_emal_belaya from './Гармония эмаль белая.jpg'

export const DR_Garmoniya = {
    id: 'dr_garmoniya',
    URL: '/mezhkomnatnie/dr_garmoniya',
    name: 'Гармония',
    photo: Garmoniya_emal_belaya,
    price: 'от 17 250 ₽',
    types: [
        {
            photo: Garmoniya_emal_belaya,   
            type: 'Гармония эмаль белая',
            price: '21 300 ₽',
            price_komplekt: '29 775 ₽'
        },
        {
            photo: Garmoniya_antichni_orekh,   
            type: 'Гармония античный орех',
            price: '17 250 ₽',
            price_komplekt: '25 725 ₽'
        },
    ]
}