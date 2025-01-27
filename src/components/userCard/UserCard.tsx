import "./userCard.css";
function UserCard({ name, age, hobby }) {
  //console.log(props);

  return (
    <div className="userCard">
      <h4 className="name">Name:{name}</h4>
      <p>Age:{age}</p>
      {/* <p>Hobby:{props.hobby}</p> */}

      {/* если props.hobby - true, то часть выражения после && будет показана */}
      {/* {props.hobby && (<p>Hobby: {props.hobby}</p>)} */}
      {/* если использовать тернарный оператор, то нужно указывать второе значение, если false */}
      {hobby ? <p>Hobby: {hobby}</p> : <p>No hobby 🙇‍♂️</p>}

      {/* <p>Job:{props.job}</p> т.к job  не объявлен в родителе , он не передается  и мы не можем его взять из props*/}
      {/*  */}
    </div>
  );
}
export default UserCard;
