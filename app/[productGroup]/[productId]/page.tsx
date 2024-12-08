{/*В Next.js 15 асинхронные операции поддерживаются только в серверных компонентах. 
Т.е. в этом файле если написать 'use client', выдаст ошибку.
Чтобы решить эту проблему, я разделил логику загрузки и отображения данных 
на серверные (page.tsx) и клиентские компоненты (clientComponent.tsx).
Серверный компонент будет загружать данные и передавать их в клиентский компонент.
Клиентский компонент будет отвечать за отображение данных и обработку пользовательских взаимодействий.*/}


import { allProducts } from "../all-products";
import ClientProduct from "./clientComponent";

export default async function ServerProductPage({ params }: {
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

    return (
        <ClientProduct product={product} productGroup={productGroup} />
    )
}