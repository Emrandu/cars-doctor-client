import About from "../About/About";
import Availability from "../Availability/Availability";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Availability />
            <Products />
        </div>
    );
};

export default Home;