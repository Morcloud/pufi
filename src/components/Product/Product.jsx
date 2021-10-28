import React from "react";

export const Product = ({ image, title, description, buttonToggle }) => {
    return (
        <article className='product'>
            <div
                className='product__cover'
                style={{ backgroundImage: `url(/test.jpg)` }}
            >
                {buttonToggle && (
                    <div className='product__cover--button'>shop</div>
                )}
            </div>
            <div className='product__details'>
                {image ? (
                    <img
                        className='product__details--image'
                        src={image}
                        alt=''
                    />
                ) : (
                    <p className='product__details--fail'>
                        No hay imagen disponible :(
                    </p>
                )}

                <p className='product__details--title'>{title}</p>
                <div className='product__details--divider'></div>
                <p className='product__details--description'>{description}</p>
                <p className='product__details--see-more'>
                    <i></i>ver más
                </p>
            </div>
        </article>
    );
};
