export const SocialImage = ({ image }) => {
    return (
        <figure className='social__grid--image'>
            <img
                src={image}
                alt='Usuarios de Pufi'
                title='Usuarios satisfechos'
            />
        </figure>
    );
};
