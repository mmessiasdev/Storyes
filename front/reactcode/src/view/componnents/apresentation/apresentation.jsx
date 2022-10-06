import React from "react";
import { Link } from "react-router-dom";
import './apresentation.css'

const Apresentation = () => {
    return (
        <>
            <div className="apresentation" id="apresentation">
                <div className="title">
                    <h2>Popular</h2>
                </div>
                <div className="list">
                    <ProdApres />
                    <ProdApres />
                    <ProdApres />
                    <ProdApres />
                    <ProdApres />
                    <ProdApres />
                    <ProdApres />
                    <ProdApres />
                    <ProdApres />
                    <ProdApres />
                </div>
            </div>
        </>
    )
}

const ProdApres = () => {
    return (
        <>
            <Link to="/login" className="link" >
                <div className="product">
                    <div className="photo">

                    </div>
                    <div className="info">
                        <div className="text">
                            <h3>Teste Teste Teste Teste Teste</h3>
                            <h5>Teste Teste Teste Teste Teste Teste Teste Test Teste</h5>
                        </div>
                        <div className="number">
                            <h4>de 280,00 R$</h4>
                            <h2>por 280,00 R$</h2>
                        </div>
                    </div>
                </div>

            </Link>
        </>

    )
}

export default Apresentation;