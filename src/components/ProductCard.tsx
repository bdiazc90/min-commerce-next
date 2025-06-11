"use client";

import { type Product } from "@/models/product";
import { useContext } from "react";
import { CartContext } from "@/context/cartContext";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

interface Props {
	product: Product;
}

export default function ProductCard({ product }: Props) {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("No se encuentra CartContext");
	}
	const { cart, addToCart } = context;

	let quantityInCart = 0;
	if (cart && cart.length > 0) {
		const thisProduct = cart.find((cartItem) => cartItem.id === product.id);
		if (thisProduct) {
			quantityInCart = thisProduct.quantity;
		}
	}

	return (
		<Link href={`/product/${product.id}`}>
		<Card className="group">
			<CardHeader>
				<CardTitle>{product.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<Image width={200} height={200} src={product.imageUrl} alt={product.title} className="w-40 transform transition-transform duration-300 group-hover:scale-105" />
				<p className="text-xl font-bold text-[#111827] dark:text-[#F9FAFB]">US$ {product.price}</p>
			</CardContent>
			<CardFooter>
				{quantityInCart > 0 ? (
					<p className="text-white">Cantidad en el carrito: {quantityInCart}</p>
				) : (
					<Button onClick={() => addToCart(product)} variant={"atractive"}>
						Agregar al carrito
					</Button>
				)}
			</CardFooter>
		</Card>
		</Link>
	);
}
