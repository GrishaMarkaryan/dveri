'use client'

import Link from "next/link"
import Image from "next/image";
import icon from '@/app/_images/иконка.png'
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
        let handler = (e: any) => {
            if (!menuIconRef.current?.contains(e.target) && !menuListRef.current?.contains(e.target)) {
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
            <div className="flex flex-col lg:flex-row gap-2 w-screen justify-between items-center bg-slate-200 h-fit lg:h-24 fixed z-50">

                <div className="flex">
                    <div ref={menuIconRef} className="pt-5 cursor-pointer lg:hidden">
                        <TiThMenu size={40} onClick={toggleMenu} />
                    </div>
                    <Link href={'/'} className="flex ml-4 lg:ml-12 p-3 gap-2 items-center">
                        <Image src={icon} alt="icon" height={42} />
                        <div className="flex font-bold text-2xl "> ДВЕРНАЯ ЯРМАРКА </div>
                    </Link>
                </div>

                <div
                    ref={menuListRef}
                    className={`flex lg:flex ${isMenuOpen ? 'flex-col ' : 'hidden h-0'} gap-2 items-center xl:gap-12 text-xl lg:text-base xl:text-xl font-medium pb-7 lg:pb-0`}
                >

                    <Link href={'/our-production'} onClick={() => setIsMenuOpen(false)}> Продукция </Link>
                    <Link href={'/about-us'} onClick={() => setIsMenuOpen(false)} > О компании </Link>
                    <Link href={'/our-contacts'} onClick={() => setIsMenuOpen(false)}> Контакты </Link>
                </div>
                <Contacts isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
            <div className="h-[66px] lg:h-24"></div>
        </div>
    )
}