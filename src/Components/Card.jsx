import {cardContainer} from "../Styles/Card.module.css";

const Card = ({ userName, userTvShow }) => {
  return (
    <div className={cardContainer}>
      <h3>¡Hola {userName}!</h3>
      <h3>Ahora sé que tu serie favorita es {userTvShow} :D</h3>
    </div>
  );
};

export default Card;
