import Section from "../../components/section/Section";
import products from '../../assets/products.json';

function Home() {
    return (
        <div>
            <Section products = {products} title = 'New Items'/>
            <Section products = {products} title = 'Recommended Items'></Section>
        </div>
    )
}

export default Home;