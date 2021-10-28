import { connect } from "react-redux";
import { Product } from "./Product";
// import { useFetch } from "../../hooks/useFetch";
import "./product.scss";

const mapStateToProps = (state) => {
    return {
        product: state.product,
    };
};

export const ProductList = ({ product }) => {
    // Endpoint y Access Token para consumir la API de Instagram (dura 1 hora)
    // const accessToken =
    //     "IGQVJWb01BS2VsSUpyZA3podVZAEUlB0SWtrREJpZA3NDWUJHM3hLSnFHQnB4WmZAHNWdyQURqRC1nMENCNWpNLWhLUlhXek80Y0d4NHM2eklHYThwc0NaTjhHV1NvWlh3THRGeXlkbVh2S21iMHBDc21UMGYyX2VFSjRicFNr";

    // const mediaFields = "id,media_type,media_url,permalink";
    // const url = `https://graph.instagram.com/me/media?fields=${mediaFields}&access_token=${accessToken}`;
    // const { data, loading, error } = useFetch(url);

    return (
        <section className='product-list'>
            {product.map((item) => (
                <Product key={item.title} {...item} />
            ))}
        </section>
    );
};

export const ConnectedProductList = connect(mapStateToProps)(ProductList);
