import React from 'react';
import './components_css/app.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import ContasaReceber from './components_js/ContasaReceber';
import ContasaPagar from './components_js/ContasaPagar';
import Financas from './components_js/Financas';
import Administracao from './components_js/Administracao';
import Arquivos from './components_js/Arquivos';
import Contato from './components_js/Contato';
import Inicio from './components_js/Inicio';

function App() {
  function mouseOver(e) {
    e.target.style.color = '#fff';
    e.target.style.cursor = "pointer";
    
    
  }

  function mouseOut(e) {
    e.target.style.color = '#dbb8d7';
  }

  function mostrar(){
    document.getElementById("sidebar").style.width = "200px";
    document.getElementById('main').style.marginLeft = "200px"
    document.getElementById('show_sidebar').style.visibility = "hidden"

  }
  
  function esconder(){
    document.getElementById("sidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById('show_sidebar').style.visibility = "visible"
  }
  
  return (
    <div>
      <div className="wrapper">
        <Router>
          <div className="sidebar" id="sidebar">
            <div className="page_inicial">
              <div id="close_sidebar" onClick={esconder} style={{color: "#dbb8d7"}}>☰</div>
            </div>
            <ul>
              <li><Link to="/"><i className="fas fa-home" />Inicio</Link></li>
              <div data-toggle="collapse" href="#collapse_contato">
                <li onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ color: "#dbb8d7", display: "block" }}><i className="fas fa-truck" style={{ width: "25px" }} />Configurações <i style={{ marginLeft: "10px", color: "#dbb8d7" }} className="fas fa-caret-down"></i></li>
              </div>
              <div className="collapse" id="collapse_contato">
                <li><Link to="/administracao"><i className="fas fa-brain oculto" />Administração</Link></li>
                <li><Link to="/contato"><i className="fas fa-address-book oculto" />Contato</Link></li>
              </div>

              <div data-toggle="collapse" href="#collapse_dashboards">
                <li onMouseOver={mouseOver} onMouseOut={mouseOut} style={{ color: "#dbb8d7", display: "block" }}><i className="fas fa-chart-line" style={{ width: "25px" }} />Dashboards <i style={{ marginLeft: "10px", color: "#dbb8d7" }} className="fas fa-caret-down"></i></li>
              </div>

              <div className="collapse" id="collapse_dashboards">
                <li><Link to="/contasareceber"><i className="fas fa-money-bill-alt oculto" />Contas a Receber</Link></li>
                <li><Link to="/contasapagar"><i className="fas fa-hand-holding-usd oculto" />Contas a Pagar</Link></li>
              </div>


              <li><Link to="/arquivos"><i className="fas fa-folder" />Arquivos</Link></li>
              <li><Link to="/financas"><i className="fas fa-cash-register" />Finanças</Link></li>
            </ul>
            <div className="footer_sidebar">
              <p className="user-select-none">MA Andrade Logística</p>
            </div>
          </div>
          <div className="main_content" id="main">
              <span id="show_sidebar" onClick={mostrar} >☰</span>
            <div className="d-flex justify-content-center user-select-none" id="sistema">
              <span>
              <h1>Sistema MA Andrade</h1>
              </span>
              </div>
            <hr />
            <div className="info">
              <Switch>
              <Route exact path="/">
                  <Inicio />
                </Route>
                <Route exact path="/contato">
                  <Contato />
                </Route>
                <Route exact path="/administracao">
                  <Administracao />
                </Route>
                <Route exact path="/contasareceber">
                  <ContasaReceber />
                </Route>
                <Route exact path="/contasapagar">
                  <ContasaPagar />
                </Route>
                <Route exact path="/arquivos">
                  <Arquivos />
                </Route>
                <Route exact path="/financas">
                  <Financas />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  )
}

export default App;