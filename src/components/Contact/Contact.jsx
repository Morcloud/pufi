import { useDispatch, connect } from "react-redux";
import { verifyEmail } from "../../actions/verifyEmail";
import "./contact.scss";

const mapStateToProps = (state) => {
    return {
        valid: state.form.valid,
    };
};

export const Contact = ({ valid }) => {
    const dispatch = useDispatch();
    const handleInputChange = ({ target }) => {
        dispatch(verifyEmail(target.value));
    };
    return (
        <section className='contact'>
            <p className='contact--title'>
                newsletter {JSON.stringify(valid, null, 3)}
            </p>
            <h2 className='contact--subtitle'>suscribite</h2>
            <p className='contact--text'>Y enterate de todas las novedades</p>
            <div className='contact__form'>
                <input
                    className={`contact__form--input is-valid ${
                        valid && "is-valid"
                    }`}
                    name='email'
                    type='text'
                    placeholder='Ingresa tu email'
                    autoComplete='off'
                    onChange={handleInputChange}
                />
                <i className='fas fa-arrow-right arrow'></i>
            </div>
        </section>
    );
};

export const ConnectedContact = connect(mapStateToProps)(Contact);
