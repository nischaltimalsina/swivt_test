export interface IHeadingProps {
  children?: string | React.ReactNode;
  type?: "1" | "2" | "3" | "4" | "5" | "6" | "custom";
  display?: "inline" | "block";
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "medium"
    | "regular"
    | "semibold"
    | "bold"
    | "extrabold"
    | "";
  color?: "primary" | "secondary" | "light" | "inherit";
  className?: string;
}

export interface IBodyProps {
  children?: string | React.ReactNode;
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl";
  display?: "inline" | "block";
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "medium"
    | "regular"
    | "semibold"
    | "bold"
    | "extrabold"
    | "";
  color: "primary" | "secondary" | "light" | "inherit";
  className?: string;
}

export interface ICaptionProps {
  children?: string | React.ReactNode;
  size?: "xs" | "sm" | "base" | "lg";
  display?: "inline" | "block";
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "medium"
    | "regular"
    | "semibold"
    | "bold"
    | "extrabold"
    | "";
  color?: "primary" | "secondary" | "light" | "inherit";
  className?: string;
}
