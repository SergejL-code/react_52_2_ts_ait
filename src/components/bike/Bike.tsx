interface Props {
  brand: string;
  gear: number;
  price: number;
}
function Bike(props: Props): JSX.Element {
  const { brand, gear, price } = props;
  return (
    <div>
      <p>Brand:{brand}</p>
      <p>Price:{price} Euro</p>
      <p>Gear:{gear}</p>
    </div>
  );
}
export default Bike;
