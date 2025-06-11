"use client";

import { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import CartItem from "./CartItem";

export default function CartPage() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("No se encuentra CartContext");
	}
	const { cart } = context;

	return (
		<main>
			<article className="p-24">
				<h2 className="text-xl">Carrito de Compras</h2>
				<hr />
				<section className="flex flex-col gap-4">
					{cart &&
						cart.length > 0 &&
						cart.map((cartItem, index) => (
							<div key={index}>
								<CartItem {...cartItem} />
							</div>
						))}
				</section>
			</article>
		</main>
	);
}
