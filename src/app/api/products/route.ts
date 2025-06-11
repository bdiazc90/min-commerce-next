import { products } from "@/models/product";
import { NextResponse } from "next/server";


// GET localhost:3000/api/products
export async function GET() {
    return NextResponse.json(products);
}

// POST localhost:3000/api/products
export async function POST() {

}