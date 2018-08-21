import React from 'react';
import logo from './../../../images/logo.png';
import './related.css';

function Related(props){
  return(
    <div className='Related'>
        <div>
          <img src={logo} width={250} alt="" />
        </div>
    </div>
  )
}

export default Related;
