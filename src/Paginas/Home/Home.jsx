import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import logo from '../../Assets/Imagens/banner-best.png';
import { Header } from '../../Componentes/Header/Header.jsx';
import { Title } from '../../Componentes/Title/Title.jsx';
import { Text } from '../../Componentes/Text/Text.jsx';

const Home = () => {

    return (
        <>

            <Header />

            <body>
                <div className="body__content">
                    <div className="body__content--text">
                        <Title title="Gerenciador de Viagens" color="#f7b84b" />
                        <Text text="Bem-vindo ao Gerenciador de Viagens ECO. Essa é uma aplicação web desenvolvida para facilitar a gestão de logística 
                                    da Secretária de Saúde do Município de Guaranésia." />
                        <Link to="/login">
                            <button className="button--assine">Começar agora</button>
                        </Link>  
                    </div>
                    <div className="body__content--logo">
                        <figure>
                            <img src={logo} alt="ECO tecnologia" title="ECO tecnologia" />
                        </figure>
                    </div>                    
                </div>
            </body>

  
        </>
    )
}

export { Home }
