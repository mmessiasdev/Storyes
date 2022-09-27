import axios from "axios";
import jwtDecode from "jwt-decode";
import { URLLOGIN, URLREGISTER } from "../model/config";

function authenticate(credentials){
    return axios.post(URLLOGIN, credentials).then(res => res.data).then(data => {
        window.localStorage.setItem("Key", data.jwt)
        window.localStorage.setItem("Username", data.user.username)
        axios.defaults.headers["Authorization"] = "Bearer" + data.jwt
        console.log(data);
        console.log(jwtDecode(data.jwt));
        console.log(isAuthenticated())
    })
}
function authRegister(credentialsRegister){
    return axios.post(URLREGISTER, credentialsRegister).then(res => res.data).then(data => {
        console.log(data);
    })
}
function isAuthenticated(){
    const token = window.localStorage.getItem("Key");

    if(token){
        const {exp} = jwtDecode(token);
        if(exp * 1000 > new Date().getTime()){
            return true
        }
    }
    return false
}



export default{
    authRegister,
    isAuthenticated,
    authenticate
};