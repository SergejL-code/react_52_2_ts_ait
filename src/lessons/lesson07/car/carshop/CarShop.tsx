import Car from "../Car.tsx";
import Bike from "../../bike/Bike.tsx";
import stepLogo from "./img/pexels-mikebirdy-120049.jpg";
function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      <Car brand="Mercedes" color="black" />
      <Car brand="Opel" color="Yellow" />
      <Car brand="Tesla" color="red" />
      <Car brand="Lada" color="green" />
      <Car brand="Audi" color="pink" />
      <h1> Первый способ подгрузить изображение через импорт</h1>
      <div>
        <img src={stepLogo} alt="" />
      </div>
      <Bike brand="Honda" gear={5} price={5_000} condition={"bad "} />
      <Bike brand="Yamaha" gear={5} price={15_000} />
      <Bike brand="Harley Davidson" gear={5} price={45_000} condition={"neu"} />
      <Bike brand="Ural" gear={4} price={20_000} />
      <Bike brand="Java" gear={3} price={10_000} />
      <h1>Второй способ из папки public, без точки перед slash --/--</h1>{" "}
      <img src="lada_3.jpg" alt="" />
    </div>
  );
}
export default CarShop;
