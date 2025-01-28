import "./profileCard.css";
interface IProfileCard {
  name: string;
  img: string;
  profession: string;
  hobby: string;
}
function ProfileCard({
  img,
  name,
  profession,
  hobby,
}: IProfileCard): JSX.Element {
  return (
    <div className="card">
      <img className="avatar-img" src={img} alt="" />
      <div className="name">{name}</div>
      <div className="profession">{profession}</div>
      <div className="hobby">
        <p>{hobby}</p>
      </div>
    </div>
  );
}
export default ProfileCard;
