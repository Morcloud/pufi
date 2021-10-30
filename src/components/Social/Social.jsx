import { useFetch } from "../../hooks/useFetch";
import { SocialImage } from "./SocialImage";
//Imagen de prueba
import imageTest from "../../images/Holidays.jpg";

import "./social.scss";

//Usando API de RapidAPI
const hashTag = "espufi";
const options = {
    method: "GET",
    headers: {
        "x-rapidapi-host": "instagram-data1.p.rapidapi.com",
        "x-rapidapi-key": "7ce415a581msh1d53b663d83c571p1ad812jsnc1fd82e65b82",
    },
};

const url = `https://instagram-data1.p.rapidapi.com/hashtag/feed?hashtag=${hashTag}`;

//Llamadas al API de instagram limitada. Si rebasa el límite, carga imágenes por default
export const Social = () => {
    const data = useFetch(url, options);

    let imagesTotal = data?.collector ?? [];

    console.log(imagesTotal);
    return (
        <section className='social'>
            <div className='social__details'>
                <p className='social__details--instagram'>instagram</p>
                <h2 className='social__details--hashtag'>#espufi</h2>
            </div>
            <div className='social__grid'>
                {imagesTotal.length > 1 ? (
                    imagesTotal.map((node) => (
                        <SocialImage key={node.id} image={node.display_url} />
                    ))
                ) : (
                    <div className='test'>
                        <SocialImage image={imageTest} />
                        <SocialImage image={imageTest} />
                        <SocialImage image={imageTest} />
                        <SocialImage image={imageTest} />
                        <SocialImage image={imageTest} />
                        <SocialImage image={imageTest} />
                    </div>
                )}
            </div>
        </section>
    );
};
