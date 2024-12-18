import { Link } from "react-router-dom";
import ICar from "../../interfaces/ICar";

interface IHomeProps {
    cars: ICar[]
}

const Home: React.FC<IHomeProps> = ({ cars }) => {
    return (  
        <>
            <h1>SuperCarlist</h1>
            <a href="#">Home</a>
            <nav>
                <ul className="grid">
                    {cars.map((singleCar) => (
                        <li key={singleCar.id}>
                            <h2>{singleCar.CarMake}</h2>
                            <Link to={`carDetails/${singleCar.id}`}>Read more</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default Home;