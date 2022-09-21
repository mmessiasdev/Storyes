import axios from "axios";
import { URLLOGIN } from "../model/config";

function authenticate(credentials){
    return axios.post(URLLOGIN, credentials).then(res => res.data).then(data => {
        window.localStorage.setItem("Key", data.jwt)
        window.localStorage.setItem("Username", data.user.username)
        axios.defaults.headers["Authorization"] = "Bearer" + data.jwt
        console.log(data);
    })
}

export default{
    authenticate
};