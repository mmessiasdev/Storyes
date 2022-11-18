import React from "react";
import './aboutus.css';
import Perfil from '../../assets/perfil.png'

const AboutUs = () => {
    return (
        <>
            <div className="aboutus" id="aboutus">
                <div className="image">
                    <img src={Perfil} />
                </div>
                <div className="text">
                    <h1>
                        <h2>Sobre a</h2> Storyes
                    </h1>
                    <h4>
                        Uma loja para gamers
                    </h4>
                    <h3>
                        A Storyes é um loja criada para fins de teste e evolução de portfólio; pensada, planejada e contruída excluisvamente por mim, Manoel Messias. Fiz com o intuíto de demonstrar algumas skills que eu possuo no Front/Back end, que desenvolvi com meu tempo de experência na área da programação.
                    </h3>
                </div>
            </div>
        </>
    );
}

export default AboutUs;