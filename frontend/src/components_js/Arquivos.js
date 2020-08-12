import React from 'react';
import '../components_css/arquivos.css';

export default class Arquivos extends React.Component {

    componentDidMount() {
        var filtro = document.getElementById('filtro-nome');
        var tabela = document.getElementById('lista');
        filtro.onkeyup = function () {
            var nomeFiltro = filtro.value;
            for (var i = 1; i < tabela.rows.length; i++) {
                var conteudoCelula = tabela.rows[i].cells[0].innerText;
                var corresponde = conteudoCelula.indexOf(nomeFiltro) >= 0;
                tabela.rows[i].style.display = corresponde ? '' : 'none';
            }
        };


    }

    render() {

        return (
            <div>
                <h1>Arquivos</h1>

                <table id="lista">
                    <thead>
                        <tr>
                            <th><div>Cidade</div><div><input id="filtro-nome" placeholder="Digite a cidade" /></div></th>
                            <th>Valor</th>
                            <th>Mês</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ribeirão Preto</td>
                            <td>R$ 2 000,00</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>Taubaté</td>
                            <td>R$ 4 400,00</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>Ribeirão Preto</td>
                            <td>3333-3333</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>Ribeirão Preto</td>
                            <td>3333-3333</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>Ribeirão Preto</td>
                            <td>3333-3333</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>Ribeirão Preto</td>
                            <td>3333-3333</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>Ribeirão Preto</td>
                            <td>3333-3333</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>Ribeirão Preto</td>
                            <td>3333-3333</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>Mário</td>
                            <td>3333-3333</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>Mário</td>
                            <td>2222-2222</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>Rodrigo</td>
                            <td>3333-3333</td>
                            <td>123</td>
                        </tr>
                        <tr>
                            <td>Silvana</td>
                            <td>3333-3333</td>
                            <td>123</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}
