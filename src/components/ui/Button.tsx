import type { ButtonProps } from "../../types/components";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) => {
  const baseStyles =
    "font-medium rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl",
    secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
