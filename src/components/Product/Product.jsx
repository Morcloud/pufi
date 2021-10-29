import React from "react";

export const Product = ({
    cover,
    imageProduct,
    title,
    description,
    buttonToggle,
    moreInfo,
}) => {
    return (
        <article className='product'>
            <div
                className='product__cover'
                style={{ backgroundImage: `url(${cover})` }}
            >
                {/* <img src={cover} alt='cover' /> */}
                {buttonToggle && (
                    <div className='product__cover--button'>shop</div>
                )}
            </div>
            <div className='product__details'>
                {imageProduct ? (
                    <figure className='product__details--image'>
                        <img src={imageProduct} alt='Imagen del producto' />
                    </figure>
                ) : (
                    <p className='product__details--fail'>
                        No hay imagen disponible :(
                    </p>
                )}

                <p className='product__details--title'>{title}</p>
                <div className='product__details--divider'></div>
                <p className='product__details--description'>{description}</p>
                <p className='product__details--see-more'>
                    <i className='fas fa-angle-right'></i>
                    <span>{moreInfo}</span>
                </p>
            </div>
        </article>
    );
};
