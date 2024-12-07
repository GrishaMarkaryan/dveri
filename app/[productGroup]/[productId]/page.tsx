// 'use client'   - если добавить, то выдает ошибку, что async await не поддерживают такую 

import { allProducts } from "../all-products";
import Image from "next/image"
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
    // const [doorType, setDoorType] = useState(`${productTypes[0]}`)

    return (
        <div>
            <section className="flex justify-center items-center text-2xl w-full p-4 bg-stone-200">
                {`${product.name}`}
            </section>

            <div className="flex p-12">
                <section>

                    <div>
                        <div>{product.name}</div>

                        {productTypes && <div>
                            <div> Панель {productTypes[0].type} </div>
                            <div>  {productTypes[0].color} </div>
                            <div>  {productTypes[0].size} </div>
                            <div>  {productTypes[0].price} </div>
                        </div>
                        }

                        {/*<div>{doorType}</div>*/}
                    </div>

                    <div className="flex flex-row ">
                        {productGroup === 'metallicheskie' &&
                            <div className=" w-fit cursor-pointer"> {/* эта секция только для металлических*/}
                                {product.photo &&
                                    <Image src={product.photo} alt='productPhoto' className="border-2 bg-stone-200" height={550} />
                                }
                            </div>
                        }

                        {productTypes && (
                            <div>  {/* вот тут вместо productTypes[0].photo нужно будет написать doorType.photo */}
                                <Image src={productTypes[0].photo} alt='productTypesPhoto' className="border-2 bg-stone-200" height={550} />
                            </div>
                        )}
                    </div>
                </section>


                <section >

                    <div className="flex flex-row justify-left flex-wrap gap-2 mx-4">
                        {productTypes && productTypes.map((item) =>
                            <div key={item.type} className="flex">
                                <div className="flex flex-col items-center w-fit cursor-pointer">
                                    <div> {item.type} </div>
                                    <Image src={item.photo} alt='productTypesPhoto' className="border-2 bg-stone-200" height={200} />
                                </div>
                            </div>
                        )}
                    </div>

                </section>
            </div>

        </div>
    )
}