import { Hero } from "./components/Hero/Hero";
import { ConnectedProductList } from "./components/Product/ProductList";
import { Social } from "./components/Social/Social";
import { ConnectedContact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

import "./app.scss";

function App() {
    return (
        <>
            <Hero />
            <ConnectedProductList />
            <Social />
            <ConnectedContact />
            <Footer />
        </>
    );
}

export default App;
