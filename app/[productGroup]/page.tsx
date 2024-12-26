import { StaticImageData } from "next/image"
import { allProducts } from "./all-products"
import Image from "next/image"
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

export type Products = {
    name: string,
    photo: StaticImageData,
    price: number,
}

export default async function ProductGroup({ params }: {
    params: Promise<{
        productGroup: string,
    }>
}) {
    const defineCategory = (input: string) => {
        switch (input) {
            case 'metallicheskie':
                return 'МЕТАЛЛИЧЕСКИЕ ДВЕРИ';
            case 'mezhkomnatnie':
                return 'МЕЖКОМНАТНЫЕ ДВЕРИ';
        }
    }

    const productGroupArray = allProducts[(await params).productGroup] || []
    return (
        <div className="pb-[50px] md:pb-[100px]">
            <div className="flex justify-center items-center text-2xl font-bold p-8 mb-8 bg-stone-200 w-full"> {defineCategory((await params).productGroup)} </div>
            <div className="flex flex-wrap gap-14 mx-7 md:mx-10">
                {productGroupArray.map((item) =>
                    <div key={item.URL} className="flex flex-col justify-between rounded-b-3xl md:w-64 bg-stone-200 hover:scale-105 duration-200 shadow-stone-400 shadow-sm">
                        <Link href={`${item.URL}`} className="flex flex-col">
                            <div className="h-[300px] md:w-full md:h-[500px]">
                                <Image src={item.photo} alt='itemPhoto' className="md:bg-stone-200 h-full w-full" />
                            </div>
                            <div className="border-t-black border-2 px-2 md:p-3">
                                <div className="flex text-sm max-w-[150px] md:max-w-none md:font-medium md:text-xl my-2"> {item.name} </div>
                                <div className="flex flex-col md:flex-row md:items-center md:gap-3 mt-2">
                                    <div className="font-medium"> Цена: </div>
                                    <div className="text-blue-700"> {item.price}</div>
                                </div>
                            </div>
                        </Link>
                        <a href="https://wa.me/79653949482" target="blank" className="flex justify-center gap-5 border-2  rounded-3xl md:mt-3 py-2  bg-green-500 text-white">
                            <div className="text-xl font-medium"> Заказать </div>
                            <RiWhatsappFill size={35} color="white" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}