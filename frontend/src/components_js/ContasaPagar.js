import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar, Area, AreaChart
} from 'recharts';
import '../components_css/contasapagar.css';

const data_geral = [
    {
        name: 'Janeiro', 'Sudeste': 3000, 'Sul': 2700, 'Nordeste': 4100,
    },
    {
        name: 'Fevereiro', 'Sudeste': 2800, 'Sul': 1600, 'Nordeste': 3500,
    },
    {
        name: 'Março', 'Sudeste': 2500, 'Sul': 2500, 'Nordeste': 2200,
    },
    {
        name: 'Abril', 'Sudeste': 3200, 'Sul': 2200, 'Nordeste': 2900,
    },
    {
        name: 'Maio', 'Sudeste': 1800, 'Sul': 3000, 'Nordeste': 3100,
    },
    {
        name: 'Junho', 'Sudeste': 3800, 'Sul': 1900, 'Nordeste': 4000,
    },
    {
        name: 'Julho', 'Sudeste': 1900, 'Sul': 2200, 'Nordeste': 3800,
    },

]

const data_sp = [
    {
        name: 'Janeiro', 'SJ dos Campos': 1200, Taubate: 4000, 'Ribeirão Preto': 2400, Sorocaba: 1500, 'Praia Grande': 1100, Bauru: 1500,
        'SJ do Rio Preto': 2100, Araçatuba: 1100, 'Presidente Prudente': 2000, Valinhos: 1600, 'Santa Bárbara': 3100, Cumbica: 2400, ABC: 1100,
    },
    {
        name: 'Fevereiro', 'SJ dos Campos': 1400, Taubate: 3200, 'Ribeirão Preto': 2200, Sorocaba: 1200, 'Praia Grande': 1800, Bauru: 1400,
        'SJ do Rio Preto': 1500, Araçatuba: 2100, 'Presidente Prudente': 2200, Valinhos: 1700, 'Santa Bárbara': 2800, Cumbica: 2200, ABC: 1300,
    },
    {
        name: 'Março', 'SJ dos Campos': 1600, Taubate: 2800, 'Ribeirão Preto': 1500, Sorocaba: 2100, 'Praia Grande': 1100, Bauru: 1450,
        'SJ do Rio Preto': 1900, Araçatuba: 2500, 'Presidente Prudente': 2800, Valinhos: 2100, 'Santa Bárbara': 3200, Cumbica: 1900, ABC: 2000,
    },
    {
        name: 'Abril', 'SJ dos Campos': 1100, Taubate: 3550, 'Ribeirão Preto': 2100, Sorocaba: 2000, 'Praia Grande': 2000, Bauru: 1800,
        'SJ do Rio Preto': 2200, Araçatuba: 1800, 'Presidente Prudente': 1600, Valinhos: 1600, 'Santa Bárbara': 1600, Cumbica: 2200, ABC: 3200,
    },
    {
        name: 'Maio', 'SJ dos Campos': 2000, Taubate: 1800, 'Ribeirão Preto': 1600, Sorocaba: 2800, 'Praia Grande': 1202, Bauru: 2400,
        'SJ do Rio Preto': 1800, Araçatuba: 1650, 'Presidente Prudente': 2800, Valinhos: 1100, 'Santa Bárbara': 3500, Cumbica: 1800, ABC: 1800,
    },
    {
        name: 'Junho', 'SJ dos Campos': 1800, Taubate: 2400, 'Ribeirão Preto': 2500, Sorocaba: 1500, 'Praia Grande': 1600, Bauru: 1500,
        'SJ do Rio Preto': 2100, Araçatuba: 1100, 'Presidente Prudente': 1800, Valinhos: 1605, 'Santa Bárbara': 1900, Cumbica: 1950, ABC: 1100,
    },
    {
        name: 'Julho', 'SJ dos Campos': 1650, Taubate: 2310, 'Ribeirão Preto': 1000, Sorocaba: 1300, 'Praia Grande': 1650, Bauru: 2000,
        'SJ do Rio Preto': 1450, Araçatuba: 1250, 'Presidente Prudente': 2000, Valinhos: 2000, 'Santa Bárbara': 2500, Cumbica: 2400, ABC: 800,
    },
];

const data_sul = [
    {
        name: 'Janeiro', 'Francisco Beltrão': 4000, Curitiba: 2400, Londrina: 1500,
    },
    {
        name: 'Fevereiro', 'Francisco Beltrão': 3000, Curitiba: 1398, Londrina: 2210,
    },
    {
        name: 'Março', 'Francisco Beltrão': 2000, Curitiba: 9800, Londrina: 2290,
    },
    {
        name: 'Abril', 'Francisco Beltrão': 2780, Curitiba: 3908, Londrina: 2000,
    },
    {
        name: 'Maio', 'Francisco Beltrão': 1890, Curitiba: 4800, Londrina: 7000,
    },
    {
        name: 'Junho', 'Francisco Beltrão': 2390, Curitiba: 3800, Londrina: 2500,
    },
    {
        name: 'Julho', 'Francisco Beltrão': 3490, Curitiba: 4300, Londrina: 2100,
    },
];

export default class Example extends PureComponent {

    constructor() {
        super();
        console.log("constructor")
    }

    componentDidMount() {
        document.getElementById('mostrar_pr').addEventListener('click', () => {
            document.getElementById("grafico_geral").style.display = 'none'
            document.getElementById("grafico_pr").style.display = 'block'
            document.getElementById("grafico_sp").style.display = 'none'
        })

        document.getElementById('mostrar_sp').addEventListener('click', () => {
            document.getElementById("grafico_geral").style.display = 'none'
            document.getElementById("grafico_pr").style.display = 'none'
            document.getElementById("grafico_sp").style.display = 'block'
        })

        document.getElementById('mostrar_geral').addEventListener('click', () => {
            document.getElementById("grafico_geral").style.display = 'block'
            document.getElementById("grafico_sp").style.display = 'none'
            document.getElementById("grafico_pr").style.display = 'none'
        })


    }


    render() {
        console.log("render")


        return (
            <div className="titulo container">
                <div>
                    <div className="row">

                        <div className="col-sm-8">

                            {/* INICIO DO GRÁFICO GERAL */}
                            <div style={{ width: '100%', height: 300 }} id="grafico_geral">
                                <ResponsiveContainer>
                                    <AreaChart
                                        data={data_geral}
                                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorSudeste" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                                <stop offset="50%" stopColor="#8884d8" stopOpacity={0} />
                                            </linearGradient>
                                            <linearGradient id="colorSul" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                                <stop offset="50%" stopColor="#82ca9d" stopOpacity={0} />
                                            </linearGradient>

                                            <linearGradient id="colorNordeste" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#cc332d" stopOpacity={0.8} />
                                                <stop offset="50%" stopColor="#cc332d" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Legend verticalAlign='top' />
                                        <Tooltip />
                                        <Area type="monotone" dataKey="Sudeste" stroke="#8884d8" fillOpacity={1} fill="url(#colorSudeste)" />
                                        <Area type="monotone" dataKey="Sul" stroke="#82ca9d" fillOpacity={1} fill="url(#colorSul)" />
                                        <Area type="monotone" dataKey="Nordeste" stroke="#cc332d" fillOpacity={1} fill="url(#colorNordeste)" />
                                    </AreaChart>


                                </ResponsiveContainer>
                            </div>
                            {/* FIM DO GRÁFICO GERAL */}


                            {/* INICIO DO GRÁFICO DO ESTADO DE SÃO PAULO */}
                            <div style={{ width: '100%', height: 500 }} id="grafico_sp">
                                <ResponsiveContainer>
                                    <BarChart
                                        data={data_sp}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        [<Bar dataKey="Taubate" fill="red" />, ]
                                        <Bar dataKey="SJ dos Campos" fill="black" />
                                        <Bar dataKey="Ribeirão Preto" fill="green" />
                                        <Bar dataKey="Sorocaba" fill="purple" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            {/* FIM DO GRÁFICO DO ESTADO DE SÃO PAULO */}


                            {/* INICIO DO GRÁFICO DO ESTADO DO PARANÁ */}
                            <div style={{ width: '100%', height: 300 }} id="grafico_pr">
                                <ResponsiveContainer>
                                    <LineChart
                                        data={data_sul}
                                        margin={{
                                            top: 5, right: 30, left: 20, bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <Tooltip />
                                        <YAxis />
                                        <Legend />
                                        <Line type="monotone" dataKey="Francisco Beltrão" stroke="#8884d8" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="Curitiba" stroke="red" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="Londrina" stroke="green" activeDot={{ r: 8 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            {/* FIM DO GRÁFICO DO ESTADO DO PARANÁ */}






                        </div>
                        <div className="col-sm-4 escolha_regiao" style={{ marginTop: '1em' }}>
                            <h5 id="mostrar_geral">Geral</h5>
                            <p id="mostrar_sp">São Paulo</p>
                            <p id="mostrar_mg">Minas Gerais</p>
                            <p id="mostrar_sc">Santa Catarina</p>
                            <p id="mostrar_pr">Paraná</p>
                            <p id="mostrar_ne">Nordeste</p>
                        </div>

                    </div>
                </div>




            </div>
        );
    }
}
