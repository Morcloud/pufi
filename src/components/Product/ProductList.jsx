import "./product.scss";

export const ProductList = () => {
    return (
        <section className='product-list'>
            <article className='product'>
                <div
                    className='product__cover'
                    style={{ backgroundImage: `url(/test.jpg)` }}
                >
                    <div className='product__cover--button'>shop</div>
                </div>
                <div className='product__details'>
                    <img className='product__details--image' src='' />
                    <p className='product__details--title'>Pufi RAIN</p>
                    <div className='product__details--divider'></div>
                    <p className='product__details--description'>
                        Descripción del producto. Este es un texto simulado
                    </p>
                    <p className='product__details--see-more'>
                        <i></i>ver más
                    </p>
                </div>
            </article>
            <article className='product'>
                <div
                    className='product__cover'
                    style={{ backgroundImage: `url(/test.jpg)` }}
                >
                    <div className='product__cover--button'>shop</div>
                </div>
                <div className='product__details'>
                    <img className='product__details--image' src='' />
                    <p className='product__details--title'>Pufi RAIN</p>
                    <div className='product__details--divider'></div>
                    <p className='product__details--description'>
                        Descripción del producto. Este es un texto simulado
                    </p>
                    <p className='product__details--see-more'>
                        <i></i>ver más
                    </p>
                </div>
            </article>
            <article className='product'>
                <div
                    className='product__cover'
                    style={{ backgroundImage: `url(/test.jpg)` }}
                >
                    <div className='product__cover--button'>shop</div>
                </div>
                <div className='product__details'>
                    <img className='product__details--image' src='' />
                    <p className='product__details--title'>Pufi RAIN</p>
                    <div className='product__details--divider'></div>
                    <p className='product__details--description'>
                        Descripción del producto. Este es un texto simulado
                    </p>
                    <p className='product__details--see-more'>
                        <i></i>ver más
                    </p>
                </div>
            </article>
            <article className='product'>
                <div
                    className='product__cover'
                    style={{ backgroundImage: `url(/test.jpg)` }}
                >
                    <div className='product__cover--button'>shop</div>
                </div>
                <div className='product__details'>
                    <img className='product__details--image' src='' />
                    <p className='product__details--title'>Pufi RAIN</p>
                    <div className='product__details--divider'></div>
                    <p className='product__details--description'>
                        Descripción del producto. Este es un texto simulado
                    </p>
                    <p className='product__details--see-more'>
                        <i></i>ver más
                    </p>
                </div>
            </article>
        </section>
    );
};
