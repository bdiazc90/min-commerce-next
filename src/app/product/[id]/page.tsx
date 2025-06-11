import { products} from "@/models/product"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
    const { id } = await params

    const product = products.find(p => p.id === id);
    if (!product) {
        return <h1>Producto no existe: {id}</h1>
    }


    return <h1>Producto: {product.title}</h1>
}

// localhost:3000/producto/zapatilla-puma
// localhost:3000/producto/zapatilla-aduduas-blacnas