import { mainPageProducts } from '@/app/_components/main-page-products'
import Image from "next/image"
import Link from "next/link"

export default function Production() {
    return (
        <div className="flex flex-col w-full mb-20">
            <div>
                <div className="flex justify-center p-4 mt-4 text-xl xl:text-2xl font-medium"> КАТАЛОГ ДВЕРЕЙ </div>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8  xl:gap-12 mx-[20px] xl:mx-[30px] 2xl:mx-[80px] my-7 ">
                    {mainPageProducts.map((product, index) => {
                        return (
                            <Link href={`${product.URL}`} key={index}>
                                <div key={product.id} className=''>
                                    <div className="flex flex-col cursor-pointer h-fit py-[30px]   xl:py-[60px] hover:scale-105 duration-300 rounded-[50px] bg-stone-200 shadow-lg">
                                        <div className="px-[60px]  z-5 xl: rounded-lg text-xl 2xl:text-2xl w-[50px]"> {product.name} </div>
                                        <Image src={product.bgPhoto} alt={product.name} style={{ objectFit: 'contain' }} className="z-0 rounded-xl h-[210px] xl:h-[300px] 2xl:ml-[100px]" />
                                    </div>
                                </div>
                            </Link>)
                    })}
                </div>
            </div>
        </div>
    )
}