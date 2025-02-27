interface Props {
  brand: string;
  color: string;
}
function Car(props: Props): JSX.Element {
  const { brand, color } = props;
  return (
    <div style={{ backgroundColor: color, color: "white" }}>
      Brand:{brand} Color:{color}
    </div>
  );
}

export default Car;
