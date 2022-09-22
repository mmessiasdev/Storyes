import axios from "axios";
import { URLLOGIN } from "../model/config";
import jwtDecode from "jwt-decode";
 
function authenticate(credentials){
    return axios.post(URLLOGIN, credentials).then(res => res.data).then(data => {
        window.localStorage.setItem("Key", data.jwt)
        window.localStorage.setItem("Username", data.user.username)
        axios.defaults.headers["Authorization"] = "Bearer" + data.jwt
        console.log(data);
        console.log(verifyAuthentication())
    })
}

function verifyAuthentication(){
    const token = window.localStorage.getItem("Key")

    if(token){
        const {exp} = jwtDecode(token)
        if(exp * 1000 > new Date().getTime()){
            return true;
        }
        return false
    }
}

export default{
    authenticate,
    verifyAuthentication
};