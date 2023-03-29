import React from 'react';

class NewsItem extends React.Component{

    render(){
        return(
            <div className="card">
                <img className="card-img" src={this.props.image} alt=""/>
                <div className="cardData">
                    <h5 className='cardTitle'>{this.props.title?this.props.title.slice(0,70):""}</h5>
                    <p className='cardParagraph'>{this.props.description?this.props.description.slice(0, 100):""}</p>
                    <a className='cardLink' href={this.props.url} target="_blank" rel='noreferrer'>Read more</a>
                </div>

            </div>        
        )
    }
}

export default NewsItem;