import Car from "../Car";
import Bike from "../../bike/Bike.tsx";
function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      <Car brand="Mercedes" color="black" />
      <Car brand="Opel" color="Yellow" />
      <Car brand="Tesla" color="red" />
      <Car brand="Lada" color="green" />
      <Car brand="Audi" color="pink" />"
      <Bike brand="Honda" gear={5} price={15_000} />
    </div>
  );
}
export default CarShop;
