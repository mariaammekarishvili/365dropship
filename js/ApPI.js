import { SERVER_ADDR} from "./config.js";


const call = async (url) => {
    const  req = await fetch(SERVER_ADDR + url);
    const result = await req.json()
    return result;
};

export const products = async (sort = null) => {
    return await call(`products${sort ? `?sort=${sort}` : ''}`);
};

export const categories = async () => await call('products/categories');








// https://fakestoreapi.com/docs