import { products } from "@/models/product";
import ProductCard from "@/components/ProductCard";

export default function Home() {
	return (
		<main>
			<article className="p-12">
				<h1 className="text-4xl">Min-Commerce</h1>
				<section className="flex justify-start flex-wrap pt-12 gap-8">
					{products &&
						products.length > 0 &&
						products.map((product, index) => (
							<div key={index} className="flex-1">
								<ProductCard product={product} />
							</div>
						))}
				</section>
			</article>
		</main>
	);
}
