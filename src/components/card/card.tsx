import styles from "./card.module.sass";

type CardProps = Readonly<{
  children: React.ReactNode;
}>;

export const Card = ({ children }: CardProps) => {
  return (
      <div className={styles.card}>{children}</div>
  );
};
