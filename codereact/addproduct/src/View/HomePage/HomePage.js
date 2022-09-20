import React from "react";
import axios from 'axios';
import { TextField } from "@mui/material";

import './HomePage.css';


// http://localhost:1337/api/products
// http://localhost:1337/api/auth/local
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYzNjIxOTE1LCJleHAiOjE2NjYyMTM5MTV9.o7snA8KbWVnpDt3uI_uZ2R-h9-rP30yKRTKd-uHsQUg


const HomePage = () => {

    // const { data } = await axios.post('http://localhost:1337/api/auth/local', {
    //     identifier: 'mmessiasdev',
    //     password: 'MsQwe-144',
    // });
    // console.log(data);
    // console.log(postApi.data);

    const getApi = async () => {
        const { data } = await axios.get('http://localhost:1337/api/products', {
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYzNjIxOTE1LCJleHAiOjE2NjYyMTM5MTV9.o7snA8KbWVnpDt3uI_uZ2R-h9-rP30yKRTKd-uHsQUg',
            },
        });
        console.log(data);
    }
    getApi();

    // const postApi = async () => {
    //     const { data } = await axios.post(
    //         'http://localhost:1337/api/products',
    //         {
    //           data: {
    //             name: 'Mouse Gamer Corsair RGB',
    //             desc: 'Mouse Gamer rgb com dois botões laterais e ajuste de DPI pelo software de uma das maiores empresas de Periféricos do mundo, a Corsair.',
    //             brand: 'Corsair'
    //           }
    //         },
    //         {
    //           headers: {
    //             Authorization:
    //               'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjYzNjIxOTE1LCJleHAiOjE2NjYyMTM5MTV9.o7snA8KbWVnpDt3uI_uZ2R-h9-rP30yKRTKd-uHsQUg',
    //           },
    //         }
    //       );

    //       console.log(data);
    // }
    // postApi();



    return (
        <>
            <h1>
                Storyes
            </h1>
            <form>
                <div>
                    <TextField id="identifier" label="username" type="text" name="identifier" />
                  
                </div>
            </form>
        </>
    )
}

export default HomePage;