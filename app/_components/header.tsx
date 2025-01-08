'use client'

import Link from "next/link"
import Image from "next/image";
import icon from '@/app/_images/icon.jpg'
import Contacts from './contacts';
import { TiThMenu } from "react-icons/ti";
import { useState, useRef, useEffect } from "react";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const menuIconRef = useRef<HTMLDivElement>(null);
    const menuListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => { //  тут any был, я убрал
            if (!menuIconRef.current?.contains(e.target as Node) && !menuListRef.current?.contains(e.target as Node)) {
                setIsMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    }, [])


    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-2 w-screen justify-between items-center bg-[#4b4b4b] text-white  h-fit lg:h-24 fixed z-50">

                <div className="flex items-center">
                    <div ref={menuIconRef} className="cursor-pointer lg:hidden">
                        <TiThMenu size={40} onClick={toggleMenu} />
                    </div>
                    <Link href={'/'} className="flex ml-4 lg:ml-12 p-3 gap-2 items-center transition-all ease-linear hover:text-gray-300">
                        <Image src={icon} alt="icon" height={42} />
                        <div className="flex font-bold text-2xl "> ДВЕРНАЯ ЯРМАРКА </div>
                    </Link>
                </div>

                <div
                    ref={menuListRef}
                    className={`flex lg:flex ${isMenuOpen ? 'flex-col ' : 'hidden h-0'} gap-2 items-center xl:gap-12 text-xl lg:text-base xl:text-xl pb-7 lg:pb-0`}
                >
                    <Link href={'/our-products'} onClick={() => setIsMenuOpen(false)}> <div className='transition-all ease-linear hover:translate-y-[2px] hover:text-gray-300'> Каталог </div></Link>
                    <Link href={'/delivery'} onClick={() => setIsMenuOpen(false)} > <div className='transition-all ease-linear hover:translate-y-[2px] hover:text-gray-300'> Доставка и монтаж </div> </Link>
                    <Link href={'/contacts'} onClick={() => setIsMenuOpen(false)}> <div className='transition-all ease-linear hover:translate-y-[2px] hover:text-gray-300'> Контакты </div> </Link>
                </div>
                <Contacts />
            </div>
            <div className="h-[66px] lg:h-24"></div>
        </div>
    )
}