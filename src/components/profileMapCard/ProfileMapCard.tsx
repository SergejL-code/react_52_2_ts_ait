function ProfileMapCard({ id, name, age, weapons }) {
  return (
    <div>
      <div>
        {array.map((hero) => (
          <div className="heroCard" key={hero.id}>
            <h3>{hero.name}</h3>
            <div
              className={`heroCardImgWrapper ${
                hero.isDark ? "heroCardDark" : "heroCardLight"
              } `}
            >
              <img src={hero.image} alt="" />
            </div>
            <p>{hero.age} years old</p>
            <p>{hero.isDark ? "Villan 👹" : "Hero 😇"}</p>
            {/* <p>Weapons {hero.weapons.map(weapon => ' | ' + weapon )}</p> */}
            <p>
              Weapons:{" "}
              {hero.weapons.map((weapon, index) =>
                index !== hero.weapons.length - 1 ? weapon + ", " : weapon
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileMapCard;
