import axios from "axios";
import { GENERALURL } from "../config";

const api = axios.create({
    baseURL: GENERALURL
})

export default api;