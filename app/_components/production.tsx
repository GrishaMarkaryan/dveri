import { mainPageProducts } from '@/app/_components/main-page-products'
import Image from "next/image"
import Link from "next/link"

export default function Production() {
    return (
        <div className="flex flex-col w-full mb-20">
            <div>
                <div className="flex justify-center p-4 mt-4 text-2xl xl:text-3xl font-medium"> КАТАЛОГ ДВЕРЕЙ </div>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8  xl:gap-12 mx-[20px] xl:mx-[30px] 2xl:mx-[80px] my-7 ">
                    {mainPageProducts.map((product, index) => {
                        return (
                            <Link href={`${product.URL}`} key={index}>
                                <div key={product.id} className="flex flex-col xl:flex-row cursor-pointer h-[300px] xl:gap-10 relative hover:scale-105 duration-300 rounded-[50px] bg-stone-200">
                                    <div className="px-[60px]  pt-[30px] xl:pt-[60px] rounded-lg text-2xl 2xl:text-3xl w-[50px] z-5"> {product.name} </div>
                                    <Image src={product.bgPhoto} alt={product.name} style={{ objectFit: 'contain' }} className=" z-0 rounded-xl h-[210px] xl:h-[300px]" />
                                </div>
                            </Link>)
                    })}
                </div>
            </div>
        </div>
    )
}