import React from 'react';
import { Link } from 'react-router-dom'
import '../components_css/inicio.css';


class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      mesAtual: 0,
    }
    this.fetchTasks = this.fetchTasks.bind(this)
  };


  componentWillMount() {
    this.fetchTasks()
  }

  fetchTasks() {
    fetch('http://localhost:8000/api/soma')
      .then(response => response.json())
      .then(data =>
        this.setState({
          mesAtual: data.MesAtual
        })
      )
  }

  componentDidMount(){
    console.log(this.state.mesAtual)
  }



  render() {
    const meses = ['Meses', 'Janeiro', 'Fevereiro', 'Março', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const nowMonth = meses[new Date().getMonth()];
    const nowYear = new Date().getFullYear();




    return (
      <div className="titulo user-select-none">
              <div className="container">



</div>
        <div className="row" style={{ justifyContent: "center" }}>
          {/* Faturamento Menstal */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center">
                      <Link to="/">
                        Faturamento ({nowMonth})
                      </Link>
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800" style={{ textAlign: "center" }}>R${this.state.mesAtual}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x icone" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Earnings (Monthly) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1 text-center">Faturamento Anual ({nowYear})</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800" style={{ textAlign: "center" }}>R$221,000</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-dollar-sign fa-2x icone" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" style={{ justifyContent: "center" }}>
          {/* Faturamento Menstal */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1 text-center">
                      Carta Frete ({nowMonth})
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800" style={{ textAlign: "center" }}>R$15,000</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-hand-holding-usd fa-2x icone"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Earnings (Monthly) Card Example */}
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1 text-center">Carta Frete Anual ({nowYear})</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800" style={{ textAlign: "center" }}>R$110,000</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-money-check-alt fa-2x icone"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    )
  }
}


export default Inicio;