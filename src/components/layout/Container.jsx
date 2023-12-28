import styles from "../../style/Container.module.css";

const Container = (props) => {
  return (
    <div className={`${styles.header_container}  ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
};

export default Container;
