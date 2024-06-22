import axios from "axios";

const mainUrl = axios.create({
    baseURL: "https://market.ilyosbekdev.uz"
})

export default mainUrl