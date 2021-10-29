import { connect } from "react-redux";
import { Product } from "./Product";
import pRain from "../../images/p-rain.png";
import pPuff from "../../images/p-puff.png";
import pCart from "../../images/p-cart.png";
import pNap from "../../images/p-nap.png";
import pRainCover from "../../images/p-rain-cover.jpg";
import pPuffCover from "../../images/p-puff-cover.jpg";
import pCartCover from "../../images/p-cart-cover.jpeg";
import pNapCover from "../../images/p-nap-cover.jpg";

// import { useFetch } from "../../hooks/useFetch";
import "./product.scss";

const mapStateToProps = (state) => {
    return {
        product: state.product,
    };
};

const productImages = [pRain, pPuff, pCart, pNap];

const producImagesCover = [pRainCover, pPuffCover, pCartCover, pNapCover];

export const ProductList = ({ product }) => {
    // Endpoint y Access Token para consumir la API de Instagram (dura 1 hora)
    // const accessToken =
    //     "IGQVJWb01BS2VsSUpyZA3podVZAEUlB0SWtrREJpZA3NDWUJHM3hLSnFHQnB4WmZAHNWdyQURqRC1nMENCNWpNLWhLUlhXek80Y0d4NHM2eklHYThwc0NaTjhHV1NvWlh3THRGeXlkbVh2S21iMHBDc21UMGYyX2VFSjRicFNr";

    // const mediaFields = "id,media_type,media_url,permalink";
    // const url = `https://graph.instagram.com/me/media?fields=${mediaFields}&access_token=${accessToken}`;
    // const { data, loading, error } = useFetch(url);

    return (
        <section className='product-list'>
            {product.map((item, i) => (
                <Product
                    key={item.title}
                    cover={producImagesCover[i]}
                    imageProduct={productImages[i]}
                    title={item.title}
                    description={item.description}
                    buttonToggle={item.buttonToggle}
                    moreInfo={item.moreInfo}
                />
            ))}
        </section>
    );
};

export const ConnectedProductList = connect(mapStateToProps)(ProductList);
