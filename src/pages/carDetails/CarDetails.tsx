import { useParams } from "react-router-dom";
import ICar from "../../interfaces/ICar";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";

interface ICarDetailsProps {
    cars: ICar[]
}

const CarDetails: React.FC<ICarDetailsProps> = ({ cars }) => {

    const [singleCar, setSingleCar] = useState<null | ICar>(null)

    const { carID } = useParams();

    useEffect(() => {
        if(cars && carID) {
            const findCarByID = cars.find((singleCar) => Number(singleCar.id) === Number(carID));

            setSingleCar(findCarByID || null);
        } else {
            console.error('Cars or carID not found');
        }
    }, [carID, cars])

    if (!singleCar) return <Loader />
    
    return (  
        <section className="car__details">
            <h3>{singleCar.CarMake}</h3>
            <h3>{singleCar.carModel}</h3>
            <h3>{singleCar.CarYear}</h3>

        </section>
    );
}

export default CarDetails;