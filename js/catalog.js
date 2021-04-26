import {object} from "./API";

const fillUpCatalog = async () => {
    const objectList = await object();
    console.log(objectList)
};