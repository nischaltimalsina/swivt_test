import { IBodyProps } from "./ITypeInterface";

const Body = ({
  size = "base",
  display,
  fontWeight="regular",
  color,
  children,
  className,
}: IBodyProps) => {
  return (
    <p
      className={` text-${size} font-${fontWeight} ${color} ${className} ${display}`}>
      {children}
    </p>
  );
};

export default Body;
