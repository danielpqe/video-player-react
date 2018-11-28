import React from 'react';
import notFound from  '../../../images/404.png'
import './regular-error.css'

function RegularError(props) {
    return (
        <img className="Regular-error" src={notFound} alt=""/>
    )
}

export default RegularError;
