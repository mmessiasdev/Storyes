import { Button } from "@mui/material";
import React from "react";
import './style.css';

const DivProduct = () => {
    return (
        <>
            <div className="divproduct">
                <div className="pPhoto">
                    <img src="" />
                </div>
                <div className="pInfo">
                    <div className="pPrice">
                        <h1>35,00 R$</h1>

                    </div>
                    <div className="pDesc">
                        <h2>Teste</h2>
                        <h5>Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste Teste</h5>
                    </div>
                    <div className="pQuantity">
                        <h2>Quantidade</h2>
                        <div className="number">
                            <button>-1</button>
                            <h2>3</h2>
                            <button>+1</button>

                        </div>

                    </div>
                    <div className="tt">
                        <Button variant="contained" >Comprar</Button>
                        <Button>Carrinho</Button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default DivProduct;