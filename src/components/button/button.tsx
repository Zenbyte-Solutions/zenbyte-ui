import styles from "./button.module.sass";

export type ButtonProps = Readonly<{
  children: string;
}>;

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};
