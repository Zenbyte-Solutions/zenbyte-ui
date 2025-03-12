import styles from "./button.module.sass";

type ButtonProps = Readonly<{
  children: React.ReactNode;
}>;

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};