import { useFetch } from "../../hooks/useFetch";
import { SocialImage } from "./SocialImage";
//Imagen de prueba
import imageTest from "../../images/Holidays.jpg";

import "./social.scss";

//Usando API de RapidAPI
// const hashTag = "espufi";
// const options = {
//     method: "GET",
//     headers: {
//         "x-rapidapi-host": "instagram28.p.rapidapi.com",
//         "x-rapidapi-key": "7ce415a581msh1d53b663d83c571p1ad812jsnc1fd82e65b82",
//     },
// };
// const url = `https://instagram28.p.rapidapi.com/hash_tag_medias?hash_tag=${hashTag}`;

export const Social = () => {
    // const { data, loading, error } = useFetch(url, options);
    // console.log(data, error);
    // const { hashtag } = data.data;

    // const images = hashtag.edge_hashtag_to_top_posts.edges;

    return (
        <section className='social'>
            <div className='social__details'>
                <p className='social__details--instagram'>instagram</p>
                <h2 className='social__details--hashtag'>#espufi</h2>
            </div>
            <div className='social__grid'>
                {/* {images.map((node) => (
                    <SocialImage key={node.id} image={node.display_url} />
                ))} */}
                <SocialImage image={imageTest} />
                <SocialImage image={imageTest} />
                <SocialImage image={imageTest} />
                <SocialImage image={imageTest} />
                <SocialImage image={imageTest} />
                <SocialImage image={imageTest} />
            </div>
        </section>
    );
};
