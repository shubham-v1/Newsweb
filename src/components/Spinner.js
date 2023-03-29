import React from 'react';
import loader from './loader.gif';
class Spinner extends React.Component{
    render(){
        return(
            <img id='spinner' src={loader} alt="spinner" />
        )
    }
}

export default Spinner;