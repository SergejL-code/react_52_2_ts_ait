import { useEffect, useState } from "react";
import styles from "./userPage.module.css";
interface IUserPage {
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: IAddress;
  phone: string;
}
interface IAddress {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: {
    lat: string;
    long: string;
  };
}

function UsersPage(): JSX.Element {
  const [profile, setProfile] = useState<IUserPage[]>([]);

  async function loadProfile(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/users");
    const obj = await res.json();

    setProfile(obj);
  }

  useEffect(() => {
    loadProfile();
  }, []);
  return (
    <ul className={styles.list}>
      {profile.map((user) => (
        <li key={user.id} className={styles.profile}>
          <p>Username: {user.username}</p>
          <p>
            Vorname: {user.name.firstname}
            <br />
            Nachname: {user.name.lastname}
          </p>
          <p>Handy: {user.phone}</p>
          <p>E-mail: {user.email}</p>
          <p>Postleitzahl: {user.address.zipcode}</p>
        </li>
      ))}
    </ul>
  );
}

export default UsersPage;
