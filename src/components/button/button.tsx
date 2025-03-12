import styles from "./button.module.sass";

type ButtonProps = Readonly<{
  children: string;
}>;

export const Button = (props: ButtonProps) => {
  return <button className={styles.button}>{props.children}</button>;
};
