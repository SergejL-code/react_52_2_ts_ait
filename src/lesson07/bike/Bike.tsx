interface Props {
  brand: string;
  gear: number;
  price: number;
  condition?: string;
}
function Bike(props: Props): JSX.Element {
  const { brand, gear, price, condition } = props;
  return (
    <div>
      <p>Brand:{brand}</p>
      <p>Price:{price} Euro</p>
      <p>Gear:{gear}</p>
      <p>Condition:{condition}</p>
    </div>
  );
}
export default Bike;
