import { StaticImageData } from 'next/image'
import metallicheskie from '@/app/_images/main-page/metallicheskie.png';
import mezhkomnatnie from '@/app/_images/main-page/mezhkomnatnie.png'

type MainPageProducts = {
    id: number,
    bgPhoto: StaticImageData,
    name: string,
    URL: string,
}

export const mainPageProducts: MainPageProducts[] = [
    {
        id: 1,
        bgPhoto: metallicheskie ,
        name: 'МЕТАЛЛИЧЕСКИЕ ДВЕРИ',
        URL: '/metallicheskie'
    },
    {
        id: 2,
        bgPhoto: mezhkomnatnie ,
        name: 'МЕЖКОМНАТНЫЕ ДВЕРИ',
        URL: '/mezhkomnatnie'
    }
]