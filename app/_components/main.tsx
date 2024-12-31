import { AiFillLike } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";

import Image from "next/image";
import Production from "./production";
import mainImage from '@/app/_images/main-image.jpg'


export default function Main() {
    return (
        <div className="bg-stone-300">

            <div className="relative w-full h-[500px] md:h-[750px] flex justify-center items-center ">
                <Image
                    src={mainImage}
                    alt="mainImage"
                    layout="fill"
                    className="w-full object-cover absolute z-0" />
                <div className="text-white px-[10%] text-[30px] md:text-[45px] lg:text-[50px] bg-gray-600 bg-opacity-50 absolute z-5"> МЕТАЛЛИЧЕСКИЕ И МЕЖКОМНАТНЫЕ ДВЕРИ В Г. СЕРГИЕВ ПОСАД<span className="text-black font-medium"></span></div>
            </div>

            <Production />

            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 text-xl md:text-2xl md:p-10 mb-10">
                <div className="flex flex-col justify-center items-center">
                    <AiFillLike size={70} />
                    <div className="p-10"> Более 15 лет на рынке </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <AiFillDollarCircle size={70} />
                    <div className="p-10"> Гибкие цены </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <AiFillCheckCircle size={70} />
                    <div className="p-10"> Гарантия на двери и установку </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center text-white bg-stone-500 py-9">
                <div className="text-xl md:text-3xl font-bold"> Сомневаетесь в выборе двери? </div>
                <div className="flex flex-col items-center justify-center text-base md:text-xl font-medium py-6">
                    <div className="flex flex-col md:flex-row">
                        <div> Свяжитесь с нами и мы расскажем об</div>
                        <div> особенностях каждого варианта, чтобы </div>
                    </div>
                    <div> вы сделали свой выбор </div>
                </div>
                <a href="https://wa.me/79653949482" target="blank" className="flex justify-center items-center w-fit border-2 gap-2 p-4 rounded-lg mt-3 bg-white hover:bg-stone-100 duration-100">
                    <div className="text-base ml-2 text-stone-700"> Связаться со специалистом </div>
                </a>
            </div>
        </div >
    )
}