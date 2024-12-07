// 'use client'   - если добавить, то выдает ошибку, что async await не поддерживают такую 

import { allProducts } from "../all-products";
import Image from "next/image"
// import { RiWhatsappFill } from "react-icons/ri";
// import Colors from "@/app/_components/colors";

export default async function Product({ params }: {
    params: Promise<{
        productId: string;
        productGroup: string;
    }>;
}) {
    const { productGroup, productId } = await params;

    async function getProduct(productGroup: string, productId: string) {
        const productArray = allProducts[productGroup];
        if (!productArray) return null;

        const product = productArray.find(item => item.id === productId);
        return product || null;
    }
    const product = await getProduct(productGroup, productId);

    if (!product) {
        return <div> Такого продукта не существует </div>;
    }

    const productTypes = product.types;
    // const [color, setColor] = useState('000')

    return (
        <div>
            <section className="flex justify-center items-center text-2xl p-4 md:ml-24 m-2 md:m-7 md:bg-slate-200 rounded-xl w-fit md:w-2/5">
                {`${product.name}`}
            </section>

            <section>
                <div className="w-fit cursor-pointer">
                    {product.photo &&
                        <Image src={product.photo} alt='productPhoto' className="border-2 bg-stone-200" height={150} />
                    }
                </div>
            </section>

            <section className="flex flex-row justify-left flex-wrap gap-2 mx-4 xl:mx-24">
                {productTypes && productTypes.map((item) =>
                    <div key={item.color} className="flex">
                        <div className="w-fit cursor-pointer">
                            <Image src={item.photo} alt='productTypesPhoto' className="border-2 bg-stone-200" height={150} />
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}