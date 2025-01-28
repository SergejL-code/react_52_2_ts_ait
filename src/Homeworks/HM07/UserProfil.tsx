import { useEffect, useState } from "react";
import { format } from "date-fns";
import "./userProfil.css";
function UserProfil(): JSX.Element {
  const [profile, setProfile] = useState<{
    name: string;
    gender: string;
    email: string;
    streetNumber: number;
    streetName: string;
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates?: number;
    timezone: string;
    image: string;
    phone: number;
    age: number;
    birthday: Date;
  } | null>(null);

  async function loadProfile(): Promise<void> {
    const res = await fetch("https://randomuser.me/api/");
    const obj = await res.json();
    const user = obj.results[0]; // Get the first user from the API response
    setProfile({
      name: `${user.name.title}. ${user.name.first} ${user.name.last}`,
      gender: user.gender,
      email: user.email,
      streetNumber: user.location.street.number,
      streetName: user.location.street.name,
      city: user.location.city,
      state: user.location.state,
      country: user.location.country,
      postcode: user.location.postcode,
      coordinates: user.coordinates,
      timezone: user.location.timezone.offset,
      image: user.picture.large,
      phone: user.phone,
      age: user.dob.age,
      birthday: user.dob.date,
    });
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <div>
      <h1>User </h1>
      {profile ? (
        <div>
          <div className="foto">
            <img src={profile.image} alt="" />
          </div>

          <h2>{profile.name}</h2>
          <p>Birthday:{format(new Date(profile.birthday), "yyyy-MM-dd")}</p>
          <h3>Age:{profile.age}</h3>
          <h4>Gender: {profile.gender}</h4>
          <h4>Email:{profile.email}</h4>
          <p>State:{profile.state}</p>
          <p>Country:{profile.country}</p>

          <p>City:{profile.city}</p>

          <p>Postcode:{profile.postcode}</p>
          <p>
            Street Name:{profile.streetName}, {profile.streetNumber}
          </p>

          <p>Time:{profile.timezone}</p>
          <p>Telefon:{profile.phone}</p>
          <button className="btn" onClick={() => loadProfile()}>
            next Profile
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default UserProfil;
