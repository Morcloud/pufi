import { Hero } from "./components/Hero/Hero";
import { ProductList } from "./components/Product/ProductList";
import { Social } from "./components/Social/Social";
import { Contact } from "./components/Contact/Contact";

import "./app.scss";
import { Footer } from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Hero />
            <ProductList />
            <Social />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
