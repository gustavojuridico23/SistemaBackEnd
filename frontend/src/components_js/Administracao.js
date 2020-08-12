import React from 'react';
import '../components_css/administracao.css';

class Administracao extends React.Component{


    render() {

        // const selector = document.querySelector('.formulario')
        // selector.classList.add('magictime', 'puffIn');
        
        return (
            <div id="adm" className="titulo">
                <div className="top-title">
                    <h1>Administração</h1>
                </div>

                <div className="formulario">
                    <div>
                        <input placeholder="Informe a cidade"></input>
                    </div>
                    <div>
                        <input placeholder="Informe o valor"></input>
                    </div>
                    <button className="btn btn-primary">Enviar Dados</button>
                </div>

            </div>
        )
    }
}

export default Administracao;