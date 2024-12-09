'use client'

import { useState } from "react";
import Image from "next/image"
import { RiWhatsappFill } from "react-icons/ri";

export default function ClientProduct({ product, productGroup }: {
    product: any;
    productGroup: string;
}) {

    const productTypes = product?.types;
    const [doorType, setDoorType] = useState(productTypes ? productTypes[0] : null)

    return (
        <div>

            {productTypes &&
                <section className="flex flex-col py-4 xl:flex-row justify-center gap-40 bg-stone-200">

                    <div className="flex flex-col justify-center items-center gap-4 text-2xl font-medium py-6 px-20 rounded-xl">
                        <div className="flex flex-row ">
                            <div className="flex"> Дверь: <div className="font-bold px-2 text-green-900"> {product.name}, </div></div>
                            <div> панель {doorType?.type !== '000 ()' && doorType?.type} {doorType?.color} </div>
                            <div className="pl-2"> {doorType?.size} </div>
                        </div>
                        <div className="text-3xl font-semibold">  {doorType?.price} </div>
                    </div>

                    <div className="flex flex-col justify-center items-center text-xl font-bold ">
                        <a href="https://wa.me/79653949482" target="blank" className="flex justify-center gap-5 border-2  px-20 py-3 rounded-xl md:mt-3  bg-green-500 text-white">
                            <div className="text-xl font-semibold pt-1"> Заказать </div>
                            <RiWhatsappFill size={35} color="white" />
                        </a>
                    </div>

                </section>
            }


            <div className="flex flex-row px-12 py-8 gap-10">


                <div className="flex flex-row ">
                    {productGroup === 'metallicheskie' &&
                        <div className=" w-fit cursor-pointer"> {/* эта секция только для металлических*/}
                            {product.photo &&
                                <Image src={product.photo} alt='productPhoto' className="border-2 bg-stone-200" height={550} />
                            }
                        </div>
                    }

                    {productTypes && (
                        <div>
                            <Image src={doorType?.photo} alt='productTypesPhoto' className="border-2 bg-stone-200" height={550} />
                        </div>
                    )}
                </div>

                <div className="flex flex-row justify-left flex-wrap gap-2 mx-4">
                    {productTypes && productTypes.map((item: any) =>
                        <div key={item.type} className="flex" onClick={() => setDoorType(item)}>
                            <div className="flex flex-col items-center w-fit cursor-pointer">
                                <div className="flex gap-1">
                                    <div className="font-semibold"> {item.type}</div>
                                    <div> ({item.size})</div>
                                </div>
                                <Image src={item.photo} alt='productTypesPhoto' className="border-2 bg-stone-200" height={200} />
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}