import { SERVER__ADDR} from "./config";


const call = async (url) => {
    const  req = await fetch(SERVER__ADDR + url);
    const result = await req.json()
    return result;
};

export const object = async (sort = null) => {
    return await call(`products${sort ? `?sort=${sort}` : ''}`);
};

export const categories = async () => await call('products/categories');








// https://fakestoreapi.com/docs