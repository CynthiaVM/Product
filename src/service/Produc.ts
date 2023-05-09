import axios from "axios";
import { product } from "../Interfaces/Product.Interfaces";

export async function getProducts() {
	const response = await axios.get("https://fakestoreapi.com/products");
	const products: product[] = response.data;
	return products;
}
export async function getProductById(id: number) {
	const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
	const product: product = response.data;
	return product;
}