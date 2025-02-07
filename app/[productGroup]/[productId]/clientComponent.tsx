'use client'

import { useState } from "react";
import Image from "next/image";
import { RiWhatsappFill } from "react-icons/ri";
import { Product, ProductType } from "../all-products";

export default function ClientProduct({ product, productGroup }: {
    product: Product;
    productGroup: string;
}) {

    const productTypes = product?.types;
    const [doorType, setDoorType] = useState<ProductType | null>(productTypes ? productTypes[0] : null)

    const handleImgClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div>

            {productTypes &&
                <section className="flex flex-col gap-4 py-8  xl:grid xl:grid-cols-3 bg-stone-200">

                    <div className="flex items-center justify-center mx-3 xl:items-start xl:justify-start xl:ml-[110px] gap-4 text-base xl:text-xl font-medium rounded-xl">
                        <div className="flex flex-col">
                            <div className="flex">
                                <div>Дверь:</div>
                                <div className="font-bold px-2 text-green-900"> {product.name}, </div>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                                <div> панель </div>
                                <div className="font-bold px-2 text-green-900"> {doorType?.type !== '000 ()' && doorType?.type} </div>
                                <div>{doorType?.color}</div>
                                <div>{doorType?.size}</div>
                            </div>
                        </div>
                    </div>

                    {productGroup === 'metallicheskie' ?
                        <div className="flex justify-center text-2xl font-semibold pt-6">  {doorType?.price} </div>
                        :
                        <div className="flex flex-col m-auto" >
                            <div className="flex items-center text-lg md:text-2xl font-semibold gap-2">
                                <div className="text-sm xl:text-lg font-medium">Цена полотно:</div>
                                <div>{doorType?.price}</div>
                            </div>
                            <div className="flex items-center text-lg md:text-2xl font-semibold gap-2">
                                <div className="text-sm xl:text-lg font-medium">Цена комплект:</div>
                                <div>{doorType?.price_komplekt}</div>
                            </div>
                        </div>
                    }

                    <div className="flex flex-col justify-center items-center text-lg font-bold ">
                        <a href="https://wa.me/79653949482" target="blank" className="flex justify-center gap-5 border-2  px-20 py-3 rounded-xl md:mt-3 transition-all hover:bg-green-400  bg-green-500 text-white">
                            <div className="text-lg font-semibold pt-1"> Заказать </div>
                            <RiWhatsappFill size={35} color="white" />
                        </a>
                    </div>

                </section>
            }


            <div className="flex flex-col  xl:flex-row xl:px-12 py-8 gap-10">

                <div className="flex flex-row justify-center gap-3">
                    {productGroup === 'metallicheskie' &&
                        <div className="h-auto"> {/* эта секция только для металлических*/}
                            {product.photo &&
                                <Image src={product.photo} alt='productPhoto' className="border-2 bg-stone-200 cursor-pointer h-[300px] w-[150px] xl:h-[500px] xl:min-w-[250px]" />
                            }
                        </div>
                    }

                    {productTypes && doorType && doorType.photo && (
                        <div className="h-auto">
                            <Image src={doorType?.photo} alt='productTypesPhoto' className="border-2 bg-stone-200 cursor-pointer h-[300px] w-[150px] xl:h-[500px] xl:min-w-[250px]" />
                        </div>
                    )}
                </div>

                <div className="flex flex-col mx-4 gap-7">

                    {productGroup === 'metallicheskie' ?
                        <div className="text-xl font-bold"> Панели: </div>
                        :
                        <div className="text-xl font-bold"> Модели в наличии: </div>
                    }

                    <div className="flex flex-row  xl:justify-left flex-wrap gap-6">
                        {productTypes && productTypes.map((item) =>
                            <div key={item.type} className="flex" onClick={() => setDoorType(item)}>
                                <div onClick={handleImgClick} className="flex flex-col items-center w-fit cursor-pointer">
                                    <div className="flex gap-1">
                                        <div className="text-xs"> {item.type}</div>
                                        {productGroup === 'metallicheskie' &&
                                            <div className="font-semibold text-xs"> ({item.size})</div>
                                        }
                                    </div>
                                    {productGroup === 'metallicheskie' ?
                                        <Image src={item.photo} alt='productTypesPhoto' className="border-2 bg-stone-200" height={200} />
                                        :
                                        <Image src={item.photo} alt='productTypesPhoto' className="border-2 bg-stone-200" height={300} />
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}