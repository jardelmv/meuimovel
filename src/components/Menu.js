import React, {useEffect, useRef, useState } from 'react';
import './menu.css'

const shadow = {
    boxShadow: "1px 1px 3px rgba(0,0,0,0.75)"
}

function Menu(props){

    
    
    // %20 mean space in link
    // If you already had an array then you just join them with '%20'
    // easy right
    
    function getLinkWhastapp(number, yourMessage) {
      var message = yourMessage.split(' ').join('%20');
      return 'https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message
    }
    
    var cel = getLinkWhastapp("+55034998750712","Gostaria de saber mais");
    console.log(cel);

    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);
    const handleScroll = () => {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    };
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', () => handleScroll);
      };
    }, []);

    return(
        <div className={`sticky-wrapper${isSticky ? ' sticky' : ' sticky'}`} ref={ref}>
            <div className="sticky-inner col-12 menuBox" style={shadow}>
                <div className="row menuRow">
                    <div className="col-lg-3 col-sm-5">
                        <div className="title text-brand">meuimovel<span className="mygreen">.Udi</span></div>
                    </div>
                    <div className="col-lg-7 col-sm-5">
                        {/*<a className="menuBottom menuLink" href="/">filtro</a>*/}
                    </div>
                    <div className="col-lg-2">
                        <a className="menuBottom menuLogin" href={cel}>saiba mais</a>
                    </div>

                </div>
            </div>




        </div>
    )
}

export default Menu;

/*
                    <div className="titleBox">
                        <div className="title">meuimovel<span className="mygreen">.Udi</span></div>
                    </div>


                <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-secondary active">
                        <input type="checkbox" checked /> Checked
                    </label>
                </div>
*/