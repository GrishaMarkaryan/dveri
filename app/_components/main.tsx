import { AiFillLike } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";

import Image from "next/image";
import Production from "./production";
import mainImage from '@/app/_images/main-page/main-image.webp'
import Head from "next/head";


export default function Main() {
    return (
        <div className="bg-stone-300">
            <Head>
                <title> Дверная ярмарка </title>
                <meta name="description" content="Купить металлические и межкомнатные двери в г. Сергиев Посад" />
                <meta name="keywords" content="металлические двери, межкомнатные двери, двери купить, дверная ярмарка, Дверная Ярмарка Сергиев Посад, двери Сергиев Посад" />
            </Head>
            <div className="relative w-full h-[500px] md:h-[750px] flex justify-center items-center ">
                <Image
                    src={mainImage}
                    alt="mainImage"
                    layout="fill"
                    className="w-full object-cover absolute z-0" />
                <h1 className="text-white px-[10%] text-[25px] md:text-[40px] lg:text-[45px] bg-gray-600 bg-opacity-50 absolute z-5"> МЕТАЛЛИЧЕСКИЕ И МЕЖКОМНАТНЫЕ ДВЕРИ В Г. СЕРГИЕВ ПОСАД<span className="text-black font-medium"></span></h1>
            </div>

            <Production />

            <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-10 text-lg md:text-xl md:p-10 mb-10">
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
                <div className="text-lg md:text-2xl font-bold"> Сомневаетесь в выборе двери? </div>
                <div className="flex flex-col items-center justify-center text-base md:text-lg font-medium py-6">
                    <div className="flex flex-col gap-1 md:flex-row">
                        <div> Свяжитесь с нами и мы расскажем об </div>
                        <div> особенностях каждого варианта, чтобы </div>
                    </div>
                    <div> вы сделали свой выбор </div>
                </div>
                <a href="https://wa.me/79653949482" target="blank" className="flex justify-center items-center w-fit border-2 gap-2 p-4 rounded-lg mt-3 text-stone-700 outline-none border-none bg-white hover:bg-blue-500 hover:text-gray-50 duration-300">
                    <div className="text-base ml-2 "> Связаться со специалистом </div>
                </a>
            </div>
        </div >
    )
}