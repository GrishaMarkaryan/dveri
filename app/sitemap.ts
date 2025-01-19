import { MetadataRoute } from "next";
import { allProducts } from "./[productGroup]/all-products";

interface ProductGroupAndId {
  productGroup: string;
  productId: string;
}

async function fetchProductGroupsAndIds(): Promise<ProductGroupAndId[]> {
  const productGroupsAndIds: ProductGroupAndId[] = [];

  for (const productGroup in allProducts) {
    const products = allProducts[productGroup];
    products.forEach(product => {
      productGroupsAndIds.push({ productGroup, productId: product.id });
    });
  }

  return productGroupsAndIds;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticUrls = [
    {
      url: 'https://dvernaya-yarmarka.ru',
      lastModified: new Date(),
    },
    {
      url: 'https://dvernaya-yarmarka.ru/our-products',
      lastModified: new Date(),
    },
    {
      url: 'https://dvernaya-yarmarka.ru/delivery',
      lastModified: new Date(),
    },
    {
      url: 'https://dvernaya-yarmarka.ru/contacts',
      lastModified: new Date(),
    },
  ];

  const productData = await fetchProductGroupsAndIds();

  const dynamicUrls = productData.map(product => ({
    url: `https://dvernaya-yarmarka.ru/app/${product.productGroup}/${product.productId}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...dynamicUrls];
}