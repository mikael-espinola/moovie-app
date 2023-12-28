import { FaLongArrowAltUp } from "react-icons/fa";
import styles from "../../style/ButtonToUp.module.css";

const RenderButtonToUp = () => {
  const goToUpButton = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.button_to_up_container} onClick={goToUpButton}>
      <FaLongArrowAltUp className={styles.button_to_up} />
    </div>
  );
};

export default RenderButtonToUp;
