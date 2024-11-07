import { useState } from "react";
import Card from "./Card";
import { formContainer } from "../Styles/Form.module.css";

const Form = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    tvShow: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      userInfo.name.trim().length >= 3 &&
      userInfo.tvShow.trim().length >= 6
    ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className={formContainer}>
      <form onSubmit={handleSubmit}>
        <label>Ingresa tu nombre:</label>
        <input
          type="text"
          value={userInfo.name}
          onChange={(event) =>
            setUserInfo({ ...userInfo, name: event.target.value })
          }
        />
        <label>¿Cuál es tu serie favorita?</label>
        <input
          type="text"
          value={userInfo.tvShow}
          onChange={(event) =>
            setUserInfo({ ...userInfo, tvShow: event.target.value })
          }
        />
        <button>Enviar</button>
        {error ? (
          <h4>Por favor chequea que la información sea correcta</h4>
        ) : null}
      </form>
      {show && <Card userName={userInfo.name} userTvShow={userInfo.tvShow} />}
    </div>
  );
};

export default Form;
