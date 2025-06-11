export interface Product {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    category: string,
    onSale?: boolean,
}

export const products: Array<Product> = [
    {
    id: "mocasines-elasticos-ligeros-3",
    title: "Mocasines elásticos ligeros",
    price: 134.68,
    imageUrl: "https://m.media-amazon.com/images/I/71Mcspt-6AL._AC_SX679_.jpg",
    category: "Calzado",
    onSale: true
  },
  {
    id: "gola-daytona-hombres-4",
    title: "Gola Daytona Hombres Azul",
    price: 164.25,
    imageUrl: "https://i.ebayimg.com/images/g/bkcAAeSwy2FoFmRK/s-l500.webp",
    category: "Deportivo"
  },
  {
    id: "zapatos-puma-todos-5",
    title: "Zapatos Puma todos",
    price: 182.05,
    imageUrl: "https://i.ebayimg.com/images/g/0pYAAOSwBGFnvBG5/s-l500.webp",
    category: "Deportivo"
  },
  {
    id: "zapatos-informales-hombre-9",
    title: "Zapatos informales Bruno",
    price: 109.19,
    imageUrl: "https://i.ebayimg.com/images/g/KuoAAOSw2hxknmxj/s-l500.webp",
    category: "Casual"
  },
  {
    id: "zapatillas-deportivas-clasicas-10",
    title: "Zapatillas Fila F13",
    price: 181.69,
    imageUrl: "https://i.ebayimg.com/images/g/zE8AAOSwK3ZbgYVv/s-l500.webp",
    category: "Deportivo"
  },
  {
    id: "zapatos-jimmy-buffett-15",
    title: "Zapatos Jimmy Buffett Love",
    price: 236.48,
    imageUrl: "https://i.ebayimg.com/images/g/3vYAAOSwcx5oJAw2/s-l500.webp",
    category: "Casual"
  },
  {
    id: "zapatillas-umbro-bumpy-16",
    title: "Zapatillas Umbro Bumpy",
    price: 109.19,
    imageUrl: "https://i.ebayimg.com/images/g/WCMAAeSwEihn9pZP/s-l500.webp",
    category: "Deportivo"
  },
  {
    id: "moda-tenis-hombres-20",
    title: "Moda Tenis Hombres Ligeros",
    price: 85.53,
    imageUrl: "https://i.ebayimg.com/images/g/XCIAAOSwzUtl~qPB/s-l500.webp",
    category: "Casual"
  },
  {
    id: "hombres-tenis-talla-22",
    title: "Hombres Tenis Talla Grande",
    price: 126.05,
    imageUrl: "https://i.ebayimg.com/images/g/x3wAAOSwMW5n23UZ/s-l500.webp",
    category: "Deportivo"
  },
  {
    id: "puma-rider-block-24",
    title: "Puma Rider FV Block Party",
    price: 181.36,
    imageUrl: "https://i.ebayimg.com/images/g/tr4AAOSwk1NnSBKt/s-l500.webp",
    category: "Deportivo"
  },
];