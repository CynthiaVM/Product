import { getProductById, getProducts } from "../src/service/Produc";


const listProductos = await getProducts();
console.log(listProductos);

const producto = await getProductById(1);
console.log(producto);