export const ButtonTypes = {
  primary: "btn btn-primary",
  info: "btn btn-info",
  success: "btn btn-success",
  danger: "btn btn-danger",
  warning: "btn btn-warning",
} as const;

export enum ButtonVariant {
  Primary = "primary",
  Info = "info",
  Success = "success",
  Danger = "danger",
  Warning = "warning",
}

export enum ButtonSize {
  Small = "sm",
  Default = "default",
  Large = "lg",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;  // Gebruik ButtonVariant enum
  size?: ButtonSize;        // Gebruik ButtonSize enum
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariant.Primary,  // Gebruik de ButtonVariant enum
  size = ButtonSize.Default,        // Gebruik de ButtonSize enum
  children,
  className = "",
  onClick,
  ...props
}) => {
  const buttonClass = `btn btn-${variant}`;
  const sizeClass = size === ButtonSize.Large ? "btn-lg" : size === ButtonSize.Small ? "btn-sm" : ""; // Dynamisch de grootte bepalen

  return (
    <button
      type="button"
      className={`${buttonClass} ${sizeClass} w-full ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonGroup: React.FC = () => {
  const handleClick = (message: string) => {
    console.log(message);
  };

  return (
    <div className="mb-5 flex flex-col gap-4">
      <Button variant={ButtonVariant.Primary} size={ButtonSize.Large} onClick={() => handleClick('Primary Button clicked')}>Primary Large</Button>
      <Button variant={ButtonVariant.Info} size={ButtonSize.Default} onClick={() => handleClick('Info Button clicked')}>Info Default</Button>
      <Button variant={ButtonVariant.Success} size={ButtonSize.Small} onClick={() => handleClick('Success Button clicked')}>Success Small</Button>
      <Button variant={ButtonVariant.Danger} size={ButtonSize.Small} onClick={() => handleClick('Danger Button clicked')}>Danger Small</Button>
      <Button variant={ButtonVariant.Warning} size={ButtonSize.Large} onClick={() => handleClick('Warning Button clicked')}>Warning Large</Button>
    </div>
  );
};
