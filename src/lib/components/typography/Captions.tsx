import { ICaptionProps } from "./ITypeInterface";

const Caption = ({
  size = "sm",
  display,
  fontWeight="regular",
  color="primary",
  children,
  className,
}: ICaptionProps) => {
  return (
    <p
      className={` text-${size} font-${fontWeight} ${color} ${className} ${display}`}>
      {children}
    </p>
  );
};

export default Caption;
