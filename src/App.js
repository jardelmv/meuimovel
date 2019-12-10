import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Filter from './components/Menu';
import Cartao from './components/Cartao';


function App(props) {

  var imoveis = props.lista;
  const [updfilter, setupdfilter] = useState(false);
  var listfilters=[];
  listfilters["tipoApartamento"] = true;
  listfilters["tipoCasa"] = false;
  listfilters["quartos2"] = true;
  listfilters["quartos3"] = false;
  listfilters["vagas1"] = true;
  listfilters["vagas2"] = true;
  listfilters["statuspronto"] = true;
  listfilters["statusconstruindo"] = true;
  listfilters["statusna planta"] = true;
  const [filters, setfilters] = useState(listfilters)

  const setvfilter = (elmt,v) => {
      var nfilters = filters;
      nfilters[v] = !nfilters[v];
      setfilters(nfilters);
      setupdfilter(!updfilter);
      var cname = (nfilters[v] ? "badge badge-pill badge-secondary" : "badge badge-pill badge-light");
      document.getElementById(elmt).className = cname;
  }
  
  const[qtimoveis, setqtimoveis] = useState(0);
  useEffect( () => {
    setqtimoveis(document.getElementById("imoveis").childElementCount);
  },[updfilter])

  return (
    <Fragment>
      <Filter />

      <div className="container-fluid">
      <div className="col-12 font-weight-lighter obs"><small><small>{qtimoveis} imóveis encontrados (valores sujeitos a alteração)</small></small></div>
        <div className="row">
          <div className="filters border-right order-1">
                  <badge id="t1" onClick={() => setvfilter('t1', 'tipoApartamento')} className="badge badge-pill badge-secondary"><small>Apto.</small></badge>
                  <badge id="t2" onClick={() => setvfilter('t2', 'tipoCasa')} className="badge badge-pill badge-light"><small>Casa</small></badge>
          </div>
          <div className="filters col-s-auto border-right order-2">
                  <badge id="b1" onClick={() => setvfilter('b1', 'quartos2')} className="badge badge-pill badge-secondary"><small>2 quartos</small></badge>
                  <badge id="b2" onClick={() => setvfilter('b2', 'quartos3')} className="badge  badge-pill badge-light"><small>3 quartos</small></badge>
          </div>
          <div className="filters col-s border-right order-3">
                  <badge id="v1" onClick={() => setvfilter('v1', 'vagas1')} className="badge badge-pill badge-secondary"><small>1 vaga</small></badge>
                  <badge id="v2" onClick={() => setvfilter('v2', 'vagas2')} className="badge  badge-pill badge-secondary"><small>2 vagas</small></badge>
          </div>          
          <div className="filters col-s border-right order-4">
                  <badge id="s1" onClick={() => setvfilter('s1', 'statuspronto')} className="badge badge-pill badge-secondary"><small>pronto</small></badge>
                  <badge id="s2" onClick={() => setvfilter('s2', 'statusfase final')} className="badge  badge-pill badge-secondary"><small>fase final</small></badge>                  
                  <badge id="s3" onClick={() => setvfilter('s3', 'statusconstruindo')} className="badge  badge-pill badge-secondary"><small>em construção</small></badge>
                  <badge id="s4" onClick={() => setvfilter('s4', 'statusna planta')} className="badge  badge-pill badge-secondary"><small>na planta</small></badge>
          </div>
          {/*
          <div className="filters col-s border-right order-5">
                  <badge id="d1" onClick={() => setvfilter('s1', 'suíte')} className="badge badge-pill badge-secondary"><small>suíte</small></badge>
                  <badge id="d2" onClick={() => setvfilter('s2', 'sacada')} className="badge  badge-pill badge-secondary"><small>sacada</small></badge>
          </div>
          <div className="filters col-s border-right order-6">
                  <badge id="d3" onClick={() => setvfilter('v1', '1')} className="badge badge-pill badge-secondary"><small>portaria</small></badge>
                  <badge id="d4" onClick={() => setvfilter('v1', '1')} className="badge badge-pill badge-secondary"><small>elevador</small></badge>
                  <badge id="d5" onClick={() => setvfilter('v2', '2')} className="badge  badge-pill badge-secondary"><small>quadra</small></badge>
                  <badge id="d6" onClick={() => setvfilter('v2', '2')} className="badge  badge-pill badge-secondary"><small>gourmet</small></badge>
                  <badge id="d7" onClick={() => setvfilter('v2', '2')} className="badge  badge-pill badge-secondary"><small>piscina</small></badge>
          </div>
          */}
        </div>

        <div id="imoveis" className="row">
            {imoveis.Cadastro.map((item, index) =>
              <Fragment key={item.id} >
                  {filters["quartos"+item.quartos] 
                  && filters["tipo"+item.Tipo] 
                  && filters["vagas"+item.vagas] 
                  && filters["status"+item.Status] 
                  &&  <Cartao  props={item} />
                  }
              </Fragment>
            )}
        </div>  
      </div>
    </Fragment>
  )
}

export default App;

//(quartos["quartos" + item.quartos]) && 

//{ (false || true) && <div>Show!!</div>}

//https://pt-br.reactjs.org/docs/components-and-props.html (img src props)
//https://reactjs.org/docs/hooks-state.html
//https://www.robinwieruch.de/firebase-deploy-react-js

//npm run build
//firebase deploy
/*
    <div style={overflowVisible}>
          <div className="filterBox">
            <div className="btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-secondary active">
                    <input type="checkbox" checked /> Checked
                </label>
            </div>
          </div>


    <div className="container-fluid" style={onContent}>
      <div className="row">
          {imoveis.Cadastro.map((item, index) => (
            <Cartao key={item.id} props={item}/>
          ))}
      </div>  
    </div>
  </div>
  */

/*
          <Fragment>
            <p>Lorem ipsum...</p>
            <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
              <Filter />
            </div>
            <p>Lorem ipsum...</p>
          </Fragment>
*/