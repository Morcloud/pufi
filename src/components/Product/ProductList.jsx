import { connect } from "react-redux";
import { Product } from "./Product";
import "./product.scss";

const mapStateToProps = (state) => {
    return {
        product: state.product,
    };
};

export const ProductList = ({ product }) => {
    console.log(product);

    return (
        <section className='product-list'>
            {product.map((item) => (
                <Product key={item.title} {...item} />
            ))}
        </section>
    );
};

export const ConnectedProductList = connect(mapStateToProps)(ProductList);
