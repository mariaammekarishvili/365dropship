import {SERVER_ADDR} from "./serverAddres.js";

const connect = async (url) =>
{
    try {
        const request =  await  fetch(SERVER_ADDR + url)
        const result = await request.json()
        return(result)
    }catch (err){
        return(err)
    }

}

export const productsSort = async (sort = null) => {
   return  await connect(`products${sort ? `?sort=${sort}` : ""}`);
}


export const categories = async () => await connect('products/categories');

console.log(categories())