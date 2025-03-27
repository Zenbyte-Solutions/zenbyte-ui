import styles from "./button.module.sass";

type ButtonProps = Readonly<{
  children: React.ReactNode;
}>;

export const Button = ({ children }: ButtonProps) => {
  return (
    <>
      <button className={styles.button}>{children}</button>
      <p className="bg-amber-700 text-red-600">hallloooo</p>
    </>
  );
};
