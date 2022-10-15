import React from 'react';
import './styles.css';
import logo from '../../stackline_logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <object data={logo} width="300" height="300"> </object>
        </div>
    );
};

const Product = ({ image, title, subtitle }) => {
    return (
        <div className='product'>
            <img className='productImage' src={image} alt={title} />
            <h4 className='productTitle'>{title}</h4>
            <div className='subtitleDiv'>
                <h5 className='productSubtitle'>{subtitle}</h5>
            </div>
        </div>
    );
};

const ProductDescription= ({data}) => {
    return (
        <div className='productContainer'>
            <Product title={data.title} image={data.image} subtitle={data.subtitle}/>
            <Tags tags={data.tags} />
        
        </div>
    );
}

const Tags = ({ tags }) => {
    const renderTags = () =>{
        return(
            tags.map(tag => (<div className='tag'><span className='tagName'>{tag}</span></div>)
        ))
    };
    return (
        <div className='tagMainContainer'>
            <div className='tagContainer'>
                {renderTags()}
            </div>
        </div>
    );
};

export default Product;

export {Tags, ProductDescription, Header};


