'use client'
import { useState } from "react";
import { allProducts } from "../all-products";
import Image from "next/image"
import { RiWhatsappFill } from "react-icons/ri";
import Colors from "@/app/_components/colors";

export default function Product({ params }: {
    params: {
        productId: string;
        productGroup: string;
    };
}) {
    const [color, setColor] = useState('серый')

    const productIdArray = allProducts[params.productGroup].filter((item) => item.id === params.productId)
    const product = productIdArray.length > 0 ? productIdArray[0] : null;
    const productTypes = product?.types?.filter(item => item.color === color);

    return (
        <div className="">
            <div className="flex justify-center items-center text-2xl p-4 md:ml-24 m-2 md:m-7 md:bg-slate-200 rounded-xl w-fit md:w-2/5"> {`${productTypes && productTypes.map((item) => item.name)}`} </div>
            <div className="flex justify-left flex-wrap gap-16 mx-4 xl:mx-24">
                {productTypes && productTypes.map((item) =>
                    <div key={item.name} className="flex flex-col md:flex-row mx-5 xl:mx-28 md:p-3 md:w-full relative">
                        <div className="w-fit">
                            <Image src={item.photo} alt='itemPhoto' className="border-2 rounded-3xl bg-stone-200" height={350} width={350} />
                        </div>
                        <div className="flex flex-col justify-between md:ml-12 gap-3 md:gap-7 py-3 md:py-12">
                            <div className="flex gap-3 text-xl">
                                {params.productId !== 'cement' && <div className="font-semibold"> Размер: </div>}
                            </div>

                            {params.productGroup !== 'cement' && <div>
                                <div className="flex items-center gap-5 text-xl">
                                    <div className=" font-medium">Цвет:</div>
                                    <div className=" border-2 rounded-3xl w-fit py-3 px-4 bg-white"> {color} </div>
                                </div>
                                <Colors setColor={setColor} productId={params.productId} productGroup={params.productGroup} />
                            </div>}

                            <div className="flex items-center gap-3 mt-2 text-xl">
                                <div className="font-medium"> ЦЕНА: </div>
                                <div className="text-blue-700">{item.price}</div>
                            </div>
                            <a href="https://wa.me/79036610654" target="blank" className="flex justify-center items-center h-fit gap-5 border-2  rounded-3xl mt-3  px-4 py-3 md:py-5  bg-green-500 text-white  bottom-14 right-40">
                                <div className="text-xl"> Заказать </div>
                                <RiWhatsappFill size={35} color="white" />
                            </a>
                        </div>

                    </div>
                )}
            </div>
            <div className="text-3xl m-10"> Доставка: </div>
            <div className="text-xl m-10"> Условия доставки согласовываются индивидуально </div>
        </div>
    )
}