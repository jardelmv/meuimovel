import React from 'react'
import './cartao.css'


function Cartao(props){
  var url = props.props.url;
  const imgStyle = {backgroundImage: `url(${url})`};
  var formatter = new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL',});

  return (
    
    <div id={props.props.key} className="col-lg-4 col-sm-6 boxStyle boxStyle-sm">
      <div className={"cartao " + props.props.hv + " mix " + props.props.quartos + "quartos"} style={imgStyle}>
        {/* image url inside style */}
      </div>
      
        <div className="titleCartao"><h3>{props.props.Empreendimento}</h3></div>
        <div className="bottomCartao col-12">
          <div className="row textBottom">
            <div className="col-4 textCell"><b>quartos</b><p>{props.props.quartos}</p></div>
            <div className="col-4 textCell"><b>vagas</b><p>{props.props.vagas}</p></div>
            <div className="col-4 textCell">
              <b>valor</b>
              <p>{formatter.format(props.props.valor)}
                {/*<span className="col text-right font-weight-lighter"><small><small>a partir</small></small></span>*/}
              </p>
            </div>
          </div>
        </div>
      
    </div>
  )
}
//<div className="col-4"><b>valor</b><p>{"R$ "+props.props.valor.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.')}</p></div>
//style={{ backgroundImage: `url(${url})`, backgroundsize:'100% 100%',  }}
//<img className="" src={ props.imagem } alt="" />
export default Cartao;