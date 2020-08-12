import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import '../components_css/contasareceber.css';

function ContasaReceber() {

    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
            datasets: [{
                label: 'faturamento da cidade',
                data: [10, 20, 34, 24, 19, 40],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderWidth: 4
            }]
        })
    }
    useEffect(() => {
        chart()
    }, [])
    return (
        <div className="titulo">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Line data={chartData} />
                    </div>
                    <div className="col-sm">
                        One of three columns
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContasaReceber;