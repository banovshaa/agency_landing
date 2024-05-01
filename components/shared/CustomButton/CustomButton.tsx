import { CSSProperties } from "react";
import styles from "./CustomButton.module.scss";
type CustomButtonProps = {
  title: string;
  style?: CSSProperties;
};
const CustomButton = ({ title, style }: CustomButtonProps) => {
  return (
    <button style={style} className={styles.custom__button}>
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
