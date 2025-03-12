import styles from "./button.module.sass";

type ButtonProps = {
  children: string;
};

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};